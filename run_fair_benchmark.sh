#!/bin/bash

echo "================================================================"
echo " ⚖️  ULTIMATE FAIR BENCHMARK (APPLES-TO-APPLES) ⚖️ "
echo "================================================================"
echo "Initializing Stream for JetStream..."
# Stream banani zaroori hai JetStream ke liye
docker run --rm --network host natsio/nats-box nats stream add benchstream --subjects "js-small,js-med,js-large" --storage memory --defaults >/dev/null 2>&1

echo "Gathering data using neutral clients... (Please wait 1-2 minutes)"

# 1. Apache Kafka (Neutral Client se Host network ke through)
K_S=$(docker run --rm --network host confluentinc/cp-kafka:latest kafka-producer-perf-test --topic k-small4 --num-records 1000 --record-size 100 --throughput -1 --producer-props bootstrap.servers=localhost:9092 2>/dev/null | grep -o "[0-9.]* MB/sec" | head -1)
K_M=$(docker run --rm --network host confluentinc/cp-kafka:latest kafka-producer-perf-test --topic k-med4 --num-records 1000 --record-size 10240 --throughput -1 --producer-props bootstrap.servers=localhost:9092 2>/dev/null | grep -o "[0-9.]* MB/sec" | head -1)
K_L=$(docker run --rm --network host confluentinc/cp-kafka:latest kafka-producer-perf-test --topic k-large4 --num-records 1000 --record-size 512000 --throughput -1 --producer-props bootstrap.servers=localhost:9092 2>/dev/null | grep -o "[0-9.]* MB/sec" | head -1)

# 2. Redpanda (Same Neutral Client se Host network ke through)
R_S=$(docker run --rm --network host confluentinc/cp-kafka:latest kafka-producer-perf-test --topic r-small4 --num-records 1000 --record-size 100 --throughput -1 --producer-props bootstrap.servers=localhost:19092 2>/dev/null | grep -o "[0-9.]* MB/sec" | head -1)
R_M=$(docker run --rm --network host confluentinc/cp-kafka:latest kafka-producer-perf-test --topic r-med4 --num-records 1000 --record-size 10240 --throughput -1 --producer-props bootstrap.servers=localhost:19092 2>/dev/null | grep -o "[0-9.]* MB/sec" | head -1)
R_L=$(docker run --rm --network host confluentinc/cp-kafka:latest kafka-producer-perf-test --topic r-large4 --num-records 1000 --record-size 512000 --throughput -1 --producer-props bootstrap.servers=localhost:19092 2>/dev/null | grep -o "[0-9.]* MB/sec" | head -1)

# 3. NATS Core (Official Neutral Client)
N_S=$(docker run --rm --network host natsio/nats-box nats bench pub nats-small --msgs 1000 --size 100 2>/dev/null | grep -Eo "[0-9.]+ MiB/sec" | head -1)
N_M=$(docker run --rm --network host natsio/nats-box nats bench pub nats-med --msgs 1000 --size 10240 2>/dev/null | grep -Eo "[0-9.]+ MiB/sec" | head -1)
N_L=$(docker run --rm --network host natsio/nats-box nats bench pub nats-large --msgs 1000 --size 512000 2>/dev/null | grep -Eo "[0-9.]+ MiB/sec" | head -1)

# 4. NATS JetStream (Official Neutral Client)
JS_S=$(docker run --rm --network host natsio/nats-box nats bench js pub async js-small --msgs 1000 --size 100 2>/dev/null | grep -Eo "[0-9.]+ MiB/sec" | head -1)
JS_M=$(docker run --rm --network host natsio/nats-box nats bench js pub async js-med --msgs 1000 --size 10240 2>/dev/null | grep -Eo "[0-9.]+ MiB/sec" | head -1)
JS_L=$(docker run --rm --network host natsio/nats-box nats bench js pub async js-large --msgs 1000 --size 512000 2>/dev/null | grep -Eo "[0-9.]+ MiB/sec" | head -1)

# Fallbacks in case something goes wrong
K_S=${K_S:-"Failed"}
K_M=${K_M:-"Failed"}
K_L=${K_L:-"Failed"}
R_S=${R_S:-"Failed"}
R_M=${R_M:-"Failed"}
R_L=${R_L:-"Failed"}
N_S=${N_S:-"Failed"}
N_M=${N_M:-"Failed"}
N_L=${N_L:-"Failed"}
JS_S=${JS_S:-"Failed"}
JS_M=${JS_M:-"Failed"}
JS_L=${JS_L:-"Failed"}

echo ""
echo "================================================================"
echo "               MESSAGE SIZE SCALABILITY RESULTS                 "
echo "================================================================"
printf "| %-15s | %-12s | %-12s | %-12s |\n" "Message Broker" "Small(100B)" "Med(10KB)" "Large(500KB)"
echo "|-----------------|--------------|--------------|--------------|"
printf "| %-15s | %-12s | %-12s | %-12s |\n" "Apache Kafka" "$K_S" "$K_M" "$K_L"
printf "| %-15s | %-12s | %-12s | %-12s |\n" "Redpanda" "$R_S" "$R_M" "$R_L"
printf "| %-15s | %-12s | %-12s | %-12s |\n" "NATS Core" "$N_S" "$N_M" "$N_L"
printf "| %-15s | %-12s | %-12s | %-12s |\n" "NATS JetStream" "$JS_S" "$JS_M" "$JS_L"
echo "================================================================"
echo "✅ BOOM! Redpanda aur Kafka dono fair ground pe. Screenshot le lo!"
