---
layout:  /src/layouts/ProjectLayout.astro
title: 'Driving Scene Description Generator'
pubDate: 2025-02-20
description: 'An automated VLM pipeline that generates structured scene descriptions from autonomous driving images. Features 8 prompt engineering strategies, an 8-metric evaluation framework, and an AI agent for error analysis.'
languages: ["python", "docker", "pydantic"]
image:
  url: ""
  alt: "Driving Scene Description Generator pipeline"
--- 

Built this as a deep dive into prompt engineering and VLM evaluation for autonomous driving perception. The pipeline takes dashcam images from BDD100K and produces structured scene descriptions through Vision-Language Models, then rigorously evaluates how good those descriptions actually are.

## What It Does

The system processes driving images through Gemini or Groq (Llama 3.2 Vision) and outputs structured JSON containing scene summaries, detected objects with counts and spatial positions, weather and lighting classification, hazard identification, and recommended meta-actions like braking or lane changes.

The real focus is on the prompt engineering side. I built 8 systematically designed prompt variants, from a simple zero-shot baseline to a combined role-play + chain-of-thought + anti-hallucination approach. Each variant is evaluated against ground truth BDD100K labels using the same metrics, so you can see exactly which prompting techniques help and which ones don't.

## Prompt Engineering

| Variant | Strategy | Approach |
|---------|----------|----------|
| v1 | Zero-shot | Basic "describe this scene" |
| v2 | Structured | Detailed field-by-field schema |
| v3 | Role-play | AD perception engineer persona |
| v4 | Chain-of-thought | Step-by-step reasoning |
| v5 | Few-shot | 2 annotated examples |
| v6 | Safety-focused | Emphasis on hazard detection |
| v7 | Anti-hallucination | "Only report visible objects" |
| v8 | Combined | Role + CoT + grounding |

## Evaluation Framework

8 metrics that cover different aspects of VLM output quality:

- **BERTScore F1** for semantic similarity against ground truth
- **Hallucination rate** tracking false positives/negatives per object category
- **Completeness scoring** checking coverage of required output fields
- **Count accuracy** (MAE) comparing predicted vs ground truth object counts
- **Spatial grounding** evaluating object positions on a 3x3 zone grid
- **Weather and lighting accuracy** against BDD100K labels
- **LLM-as-Judge** for overall quality rating

## AI Agent

An agent that reads evaluation results, detects systematic error patterns (like hallucinating buses or confusing overcast with clear weather), and automatically generates prompt improvements to address those failures.

## Technologies

- **Python 3.11** with Pydantic v2 for data validation
- **Gemini 2.5 Flash-Lite / Groq (Llama 3.2 Vision)** as VLM backends
- **BERTScore** with RoBERTa-large for semantic evaluation
- **Docker** for reproducible pipeline execution

## Links

[View on GitHub](https://github.com/Technocrat-dev/Driver-Scene)
