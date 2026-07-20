---
layout:  /src/layouts/ProjectLayout.astro
title: 'Distributed Message Broker'
pubDate: 2025-01-15
description: 'A high-performance, fault-tolerant distributed message broker in Go with HashiCorp Raft consensus, partition sharding, ISR replication, gRPC transport, and topic-based pub/sub. Measured 262K msg/s produce with fsync on and 490K msg/s consume.'
languages: ["go", "grpc", "protobuf", "docker", "kubernetes"]
image:
  url: ""
  alt: "Distributed Message Broker architecture"
--- 

A **Kafka-inspired distributed message broker** built in Go. Consensus rides on **HashiCorp's Raft library**; everything above it (the storage engine, partition sharding, ISR replication, and the full producer/consumer protocol) is my own design and implementation. I wanted to really understand distributed systems, so I built one.

## Architecture

The broker runs as a **3-node cluster** with automatic leader election and log replication via **HashiCorp Raft**. Each node handles producer and consumer connections over **gRPC** with Protocol Buffer serialization.

### Core Components
- **Consensus Layer**: HashiCorp Raft integration covering leader election, log replication, heartbeat management, and cluster membership
- **Topic-Partition Manager**: Topic-based pub/sub with **partition sharding**, configurable partition counts (1000+ partitions supported), and replication factors
- **Replication Layer**: Leader-follower replication with **in-sync replica (ISR)** tracking, ISR-acknowledged produce, and transparent leader-forwarding
- **Storage Engine**: Segment-based append-only log with **CRC32C checksums**, torn-write recovery, log compaction, and configurable fsync policies
- **gRPC API Layer**: Full producer/consumer API with streaming support

## Performance

Measured end-to-end with a bundled network-path load generator (`cmd/bench`) that drives real client connections, gRPC transport, and the full server request path — not in-process microbenchmarks:

- **262K msg/s produce with fsync on** (500-record batches, p99 56ms)
- **723K msg/s produce with fsync off** (OS-buffered writes)
- **490K msg/s consume** draining a 4.9M-message backlog (p99 12ms)
- **Fsync amortized across 500-record batches** so durability doesn't destroy throughput
- **Automatic controller and partition-leader failover (~10s)** across 3-node clusters
- **Gzip / Snappy / LZ4 compression** reducing storage by ~60%

## Key Features

- Automatic leader election and failover
- Log replication across cluster nodes
- Consumer group support with offset tracking
- Prometheus/Grafana monitoring
- Docker and Kubernetes StatefulSet deployments
- Reproducible gRPC load-test harness (`cmd/bench`) with JSON output

## Technologies

- **Go**: Core broker implementation
- **gRPC + Protobuf**: High-performance RPC framework
- **HashiCorp Raft**: Consensus (leader election + log replication)
- **Docker & Kubernetes**: Container orchestration
- **Prometheus**: Metrics and monitoring

## Links

[View on GitHub](https://github.com/Technocrat-dev/Distributed_Broker)
