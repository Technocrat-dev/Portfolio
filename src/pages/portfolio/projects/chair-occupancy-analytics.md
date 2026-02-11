---
layout:  /src/layouts/ProjectLayout.astro
title: 'AI Chair Occupancy Analytics'
pubDate: 2025-06-15
description: 'Real-time chair occupancy detection using YOLOv11 and DeepSort with multi-camera spatial deduplication, hitting 60+ FPS across 10+ concurrent RTSP streams.'
languages: ["python", "pytorch", "opencv", "fastapi", "websocket", "docker"]
image:
  url: ""
  alt: "AI Chair Occupancy Analytics dashboard"
--- 

Built this during my **ML internship at Reliance Industries**. It does real-time chair occupancy detection across multiple camera feeds at once. Think of it as the kind of system you'd deploy in a corporate office to figure out which seats are actually being used.

## Core Detection Pipeline

- **YOLOv11** for chair and person detection with custom-trained weights
- **DeepSort** tracking to keep persistent identity across frames
- **Spatial association** that maps people to specific chairs using IoU overlap
- **60+ FPS** processing across concurrent RTSP streams

## Multi-Camera Architecture

The **Multi-Camera Manager** handles 10+ concurrent feeds with:

- **Spatial deduplication** to prevent double-counting people visible from overlapping cameras using geometric projection
- **Adaptive frame skipping** that adjusts processing rate based on scene activity
- **Motion blur detection** to identify degraded frames and adjust tracking confidence (+25% accuracy improvement)
- **Per-camera occupancy state** with independent tracking and global aggregation

## Real-Time Dashboard

A glassmorphism-styled dashboard built with FastAPI + WebSocket that shows:

- Live occupancy heatmaps per zone
- Historical occupancy trends
- Camera health monitoring
- Alert configuration for capacity thresholds

## Key Technical Details

- **RTSP stream processing** with OpenCV and multi-threaded frame buffering
- **SQLAlchemy persistence** for historical analytics
- **WebSocket real-time updates** with sub-second latency to the dashboard
- **Docker containerized** with GPU passthrough support

## Technologies

- **Python**: Core application
- **YOLOv11**: Object detection
- **DeepSort**: Multi-object tracking
- **FastAPI**: REST + WebSocket API
- **OpenCV**: Video stream processing
- **Docker**: Containerization

## Links

[View on GitHub](https://github.com/Technocrat-dev/AI-occupancy-analytics)
