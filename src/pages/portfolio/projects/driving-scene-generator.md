---
layout:  /src/layouts/ProjectLayout.astro
title: 'Driving Scene Description Generator'
pubDate: 2025-02-20
description: 'An automated VLM pipeline that generates structured scene descriptions from autonomous driving images. Compares 8 prompt strategies across 9 metrics on 100 BDD100K scenes (800 evaluations) with statistical significance testing, plus an AI agent for error analysis.'
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

9 metrics that cover different aspects of VLM output quality:

- **BERTScore F1** for semantic similarity against ground truth
- **Hallucination rate** tracking false-positive object categories
- **Miss rate** tracking false-negative categories against ground truth
- **Completeness scoring** checking coverage of required output fields
- **Count accuracy** (MAE) comparing predicted vs ground truth object counts
- **Spatial grounding** evaluating object positions on a 3x3 zone grid
- **Weather and lighting accuracy** against BDD100K labels
- **Image-grounded LLM-as-Judge** for overall quality rating

Every claim is backed by statistics: 95% bootstrap confidence intervals per variant, and paired permutation tests against the zero-shot baseline.

## Results

Across 100 BDD100K scenes (800 evaluations), schema-constrained prompting cut miss rate from 28.9% to 26.2% and count error by 5%, both significant at p < 0.05 under paired permutation tests. Just as interesting were the negative results: no prompt variant significantly moved hallucination rate, and few-shot examples produced the best BERTScore while doing nothing for actual task accuracy — a good reminder that semantic-similarity metrics can reward fluency over correctness.

## AI Agent

An agent that reads evaluation results, detects systematic error patterns (like hallucinating buses or confusing overcast with clear weather), and automatically generates prompt improvements to address those failures. The pipeline runs a dual VLM backend with rate-limit-aware checkpoint/resume orchestration — the full 800-call run was recovered across daily API quota limits without losing progress. An instrument-style analysis dashboard visualizes per-variant results, confidence intervals, and failure patterns.

## Technologies

- **Python 3.11** with Pydantic v2 for data validation
- **Gemini 2.5 Flash-Lite / Groq (Llama 3.2 Vision)** as VLM backends
- **BERTScore** with RoBERTa-large for semantic evaluation
- **Docker** for reproducible pipeline execution

## Links

[View on GitHub](https://github.com/Technocrat-dev/Driver-Scene)
