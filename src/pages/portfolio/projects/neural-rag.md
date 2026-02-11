---
layout:  /src/layouts/ProjectLayout.astro
title: 'NeuralRAG'
pubDate: 2025-01-20
description: 'A self-correcting Retrieval-Augmented Generation system with LLaMA3, ChromaDB, and hybrid BM25+vector search — featuring hallucination detection and automatic query refinement.'
languages: ["python", "langgraph", "chromadb", "fastapi", "nextjs", "docker"]
image:
  url: ""
  alt: "NeuralRAG self-correcting pipeline"
--- 

**NeuralRAG** is a production-grade **Self-Correcting RAG** pipeline that doesn't just retrieve and generate — it validates its own outputs, detects hallucinations, and automatically refines queries when answers are unsatisfactory.

## Self-Correcting Pipeline

Built with **LangGraph**, the system implements a multi-step correction loop:

1. **Retrieval** — Hybrid BM25 + vector search across ChromaDB
2. **Relevance Grading** — LLM-based assessment of retrieved document relevance
3. **Generation** — Context-aware answer generation with LLaMA3
4. **Hallucination Check** — Verifies generated answers are grounded in source documents
5. **Quality Assessment** — Evaluates if the answer actually addresses the question
6. **Auto-Correction** — Reformulates queries and re-retrieves if quality is insufficient

## Multi-Modal Document Processing

- **PDF, DOCX, TXT, Markdown** ingestion with intelligent chunking
- **Recursive text splitting** with configurable chunk size and overlap
- **Metadata preservation** for source attribution

## Key Features

- **Hybrid Search** — Combines BM25 keyword matching with semantic vector similarity
- **Self-Correction Loop** — Up to 3 automatic retry cycles with query reformulation
- **Hallucination Detection** — Ensures answers are grounded in retrieved context
- **Real-time Streaming** — WebSocket-based streaming responses
- **Modern Dashboard** — Next.js frontend with document upload and chat interface

## Technologies

- **Python** — Backend pipeline
- **LLaMA3 (Ollama)** — Local LLM inference
- **ChromaDB** — Vector database
- **LangGraph** — Orchestration framework
- **FastAPI** — REST API
- **Next.js** — Frontend dashboard
- **Docker** — Containerized deployment

## Links

[View on GitHub](https://github.com/Technocrat-dev/NeuralRAG)
