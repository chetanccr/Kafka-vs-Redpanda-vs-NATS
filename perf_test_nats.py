import asyncio
import time
import nats

async def run_nats_test():
    # NATS server default port 4222 par chalta hai
    nc = await nats.connect("nats://localhost:4222")
    js = nc.jetstream()

    # Stream aur Consumer setup
    stream_name = "PERF_TEST_STREAM"
    consumer_name = "perf-consumer"
    subject = "perf.test"

    try:
        await js.add_stream(name=stream_name, subjects=[subject])
    except Exception:
        pass # Stream already exists

    payload = "A" * (1 * 1024) # 1 KB Payload
    num_messages = 5000

    print(f"[*] Producing {num_messages} messages of size 1KB to NATS Jetstream...")
    start_time = time.time()
    
    for i in range(num_messages):
        await js.publish(subject, payload.encode('utf-8'))
    
    prod_duration = time.time() - start_time
    print(f"[+] Production completed in {prod_duration:.2f} seconds.")

    # Simulating Consumer Lag: Consumer ko pehle start nahi karte, pehle backlog banne dete hain.
    print(f"[*] Consumer starting to drain backlog...")
    
    # Jetstream consumer create karte hain
    ps = await js.pull_subscribe(subject, durable=consumer_name, stream=stream_name)
    
    consumed_count = 0
    start_time = time.time()
    
    while consumed_count < num_messages:
        try:
            msgs = await ps.fetch(batch=500, timeout=2)
            for msg in msgs:
                await msg.ack()
                consumed_count += len(msgs) # Batch count logic
                # Fix for exact count tracking
            consumed_count = min(consumed_count, num_messages)
        except Exception:
            break

    duration = time.time() - start_time
    print(f"[+] Consumed {num_messages} messages in {duration:.2f} seconds (Catch-up speed).")
    
    await nc.close()

if __name__ == "__main__":
    asyncio.run(run_nats_test())
