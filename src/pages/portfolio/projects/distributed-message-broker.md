---
layout:  /src/layouts/ProjectLayout.astro
title: 'Distributed Message Broker'
pubDate: 2025-01-15
description: 'A high-performance, fault-tolerant distributed message broker in Go with HashiCorp Raft consensus, partition sharding, ISR replication, gRPC transport, and topic-based pub/sub. Achieves 100K+ messages/sec.'
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
- **Replication Layer**: Leader-follower replication with **in-sync replica (ISR)** tracking and **sub-5s failover**
- **Storage Engine**: Segment-based append-only log with log compaction and configurable fsync policies
- **gRPC API Layer**: Full producer/consumer API with streaming support

## Performance

- **100K+ messages/second** throughput with batched writes
- **Gzip / Snappy / LZ4 compression** reducing storage by ~60%
- **Sub-5s failover** on leader loss
- **Configurable fsync** so you can choose between durability and throughput
- **Segment-based storage** with automatic compaction

## Key Features

- Automatic leader election and failover
- Log replication across cluster nodes
- Consumer group support with offset tracking
- Prometheus metrics integration
- Kubernetes deployment manifests
- Comprehensive benchmark suite

## Technologies

- **Go**: Core broker implementation
- **gRPC + Protobuf**: High-performance RPC framework
- **HashiCorp Raft**: Consensus (leader election + log replication)
- **Docker & Kubernetes**: Container orchestration
- **Prometheus**: Metrics and monitoring

## Links

[View on GitHub](https://github.com/Technocrat-dev/Distributed_Broker)
