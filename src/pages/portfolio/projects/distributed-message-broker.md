---
layout:  /src/layouts/ProjectLayout.astro
title: 'Distributed Message Broker'
pubDate: 2025-01-15
description: 'A high-performance, fault-tolerant distributed message broker built from scratch in Go with Raft consensus, gRPC transport, and topic-based pub/sub — achieving 100K+ messages/sec.'
languages: ["go", "grpc", "protobuf", "docker", "kubernetes"]
image:
  url: ""
  alt: "Distributed Message Broker architecture"
--- 

A **Kafka-inspired distributed message broker** built entirely from scratch in Go — no external dependencies for the core consensus or messaging layers. Designed to demonstrate deep understanding of distributed systems fundamentals.

## Architecture

The broker runs as a **3-node cluster** with automatic leader election via the **Raft consensus protocol**. Each node handles producer and consumer connections over **gRPC** with Protocol Buffer serialization.

### Core Components
- **Raft Consensus Layer** — Custom implementation with leader election, log replication, and heartbeat management
- **Topic-Partition Manager** — Topic-based pub/sub with configurable partition counts and replication factors
- **Storage Engine** — Segment-based append-only log with configurable fsync policies
- **gRPC API Layer** — Full producer/consumer API with streaming support

## Performance

- **100K+ messages/second** throughput with batched writes
- **Snappy compression** reducing message payload by ~60%
- **Configurable fsync** — choose between durability and throughput
- **Segment-based storage** with automatic compaction

## Key Features

- Automatic leader election and failover
- Log replication across cluster nodes
- Consumer group support with offset tracking
- Prometheus metrics integration
- Kubernetes deployment manifests
- Comprehensive benchmark suite

## Technologies

- **Go** — Core broker implementation
- **gRPC + Protobuf** — High-performance RPC framework
- **Raft** — Consensus algorithm (custom implementation)
- **Docker & Kubernetes** — Container orchestration
- **Prometheus** — Metrics and monitoring

## Links

[View on GitHub](https://github.com/Technocrat-dev/Distributed_Message_Broker)
