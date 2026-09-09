import time
from kafka import KafkaProducer, KafkaConsumer
import json

# Target Broker: 'localhost:9095' (Kafka) ya 'localhost:9092' (Redpanda)
BOOTSTRAP_SERVERS = 'localhost:9095' 
TOPIC_NAME = 'performance-test-topic'
GROUP_NAME = 'perf-test-group'

def run_producer(payload_size_kb, num_messages=5000):
    producer = KafkaProducer(bootstrap_servers=BOOTSTRAP_SERVERS)
    payload = "A" * (payload_size_kb * 1024) # Custom size payload
    
    print(f"[*] Producing {num_messages} messages of size {payload_size_kb}KB to {BOOTSTRAP_SERVERS}...")
    start_time = time.time()
    
    for i in range(num_messages):
        producer.send(TOPIC_NAME, value=payload.encode('utf-8'))
    producer.flush()
    
    duration = time.time() - start_time
    print(f"[+] Production completed in {duration:.2f} seconds.")

def run_consumer_lag_test(num_messages=5000):
    print(f"[*] Consumer starting to drain backlog...")
    consumer = KafkaConsumer(
        TOPIC_NAME,
        bootstrap_servers=BOOTSTRAP_SERVERS,
        group_id=GROUP_NAME,
        auto_offset_reset='earliest',
        enable_auto_commit=True
    )
    
    consumed_count = 0
    start_time = time.time()
    empty_polls = 0
    
    while consumed_count < num_messages:
        msg_batch = consumer.poll(timeout_ms=2000)
        if not msg_batch:
            empty_polls += 1
            if empty_polls > 5: # Agar lagataar 5 polls mein kuch na aaye tab break karein
                break
            continue
            
        empty_polls = 0
        for tp, messages in msg_batch.items():
            consumed_count += len(messages)
            
    duration = time.time() - start_time
    print(f"[+] Consumed {consumed_count} messages in {duration:.2f} seconds (Catch-up speed).")
    consumer.close()
if __name__ == "__main__":
    # Test with 1 KB payload
    run_producer(payload_size_kb=1, num_messages=5000)
    time.sleep(2) # Backlog banne diya
    run_consumer_lag_test(num_messages=5000)
