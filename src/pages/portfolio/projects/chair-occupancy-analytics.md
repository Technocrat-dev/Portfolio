---
layout:  /src/layouts/ProjectLayout.astro
title: 'AI Chair Occupancy Analytics'
pubDate: 2025-06-15
description: 'Enterprise-grade real-time chair occupancy detection using YOLOv11 and DeepSort with multi-camera spatial deduplication, achieving 60+ FPS across 10+ concurrent RTSP streams.'
languages: ["python", "pytorch", "opencv", "fastapi", "websocket", "docker"]
image:
  url: ""
  alt: "AI Chair Occupancy Analytics dashboard"
--- 

Built during my **ML internship at Reliance Industries**, this system performs real-time chair occupancy detection across multiple camera feeds simultaneously — the kind of system you'd deploy in a corporate office to optimize space utilization.

## Core Detection Pipeline

- **YOLOv11** for chair and person detection with custom-trained weights
- **DeepSort** tracking for persistent identity across frames
- **Spatial association** — Maps people to specific chairs using IoU overlap
- **60+ FPS** processing across concurrent RTSP streams

## Multi-Camera Architecture

The **Multi-Camera Manager** handles 10+ concurrent feeds with:

- **Spatial deduplication** — Prevents double-counting people visible from overlapping cameras using geometric projection
- **Adaptive frame skipping** — Adjusts processing rate based on scene activity
- **Motion blur detection** — Identifies degraded frames and adjusts tracking confidence (+25% accuracy improvement)
- **Per-camera occupancy state** — Independent tracking with global aggregation

## Real-Time Dashboard

A glassmorphism-styled dashboard built with FastAPI + WebSocket provides:

- Live occupancy heatmaps per zone
- Historical occupancy trends
- Camera health monitoring
- Alert configuration for capacity thresholds

## Key Technical Details

- **RTSP stream processing** with OpenCV and multi-threaded frame buffering
- **SQLAlchemy persistence** for historical analytics
- **WebSocket real-time updates** — Sub-second latency to dashboard
- **Docker containerized** with GPU passthrough support

## Technologies

- **Python** — Core application
- **YOLOv11** — Object detection
- **DeepSort** — Multi-object tracking
- **FastAPI** — REST + WebSocket API
- **OpenCV** — Video stream processing
- **Docker** — Containerization

## Links

[View on GitHub](https://github.com/Technocrat-dev/AI-Chair-Occupancy-Analytics)
