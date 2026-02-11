---
layout:  /src/layouts/ProjectLayout.astro
title: 'Edge Vision Gateway'
pubDate: 2025-05-20
description: 'A privacy-preserving edge AI pipeline using YOLOv11-Pose and OpenVINO with 4.2× speedup via INT8 quantization, SHA-256 chain of custody, and GDPR-compliant pose skeleton anonymization.'
languages: ["python", "opencv", "openvino", "onnx", "flask", "docker"]
image:
  url: ""
  alt: "Edge Vision Gateway privacy pipeline"
--- 

A **privacy-first** edge AI system that processes video feeds locally, extracting human pose data while ensuring **zero raw footage leaves the edge device**. Designed for GDPR-compliant deployments in sensitive environments.

## Privacy-Preserving Design

The core innovation: instead of transmitting raw video, the pipeline:

1. **Detects** humans using YOLOv11-Pose
2. **Extracts** 17-keypoint pose skeletons
3. **Anonymizes** by replacing raw pixels with skeleton overlays
4. **Transmits** only pose metadata + anonymized frames

Raw video never leaves the edge. Only derived, non-identifiable data is transmitted.

## Performance Optimization

- **OpenVINO** runtime for Intel hardware acceleration
- **INT8 Quantization** — 4.2× inference speedup with minimal accuracy loss
- **ONNX export** from PyTorch for cross-platform deployment
- **Batch processing** with dynamic batch sizing based on available compute

## Chain of Custody

Every processed frame includes:

- **SHA-256 hash** of the original frame
- **Timestamp** with millisecond precision
- **Processing metadata** (model version, confidence thresholds)
- **Immutable audit log** for forensic verification

## Architecture

```
Camera Feed → Frame Buffer → YOLOv11-Pose → Pose Extraction
                                                    ↓
                                         Skeleton Rendering
                                                    ↓
                                    Flask API → Anonymized Output
```

## Technologies

- **YOLOv11-Pose** — Human pose estimation
- **OpenVINO** — Intel edge inference runtime
- **ONNX** — Model interchange format
- **Flask** — Lightweight API server
- **Python** — Core pipeline
- **Docker** — Edge deployment container

## Links

[View on GitHub](https://github.com/Technocrat-dev/Edge-Vision-Gateway)
