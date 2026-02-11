---
layout:  /src/layouts/ProjectLayout.astro
title: 'NeuralRAG'
pubDate: 2025-01-20
description: 'A self-correcting Retrieval-Augmented Generation system with LLaMA3, ChromaDB, and hybrid BM25+vector search. Features hallucination detection and automatic query refinement.'
languages: ["python", "langgraph", "chromadb", "fastapi", "nextjs", "docker"]
image:
  url: ""
  alt: "NeuralRAG self-correcting pipeline"
--- 

**NeuralRAG** is a production-grade **Self-Correcting RAG** pipeline that goes beyond basic retrieval and generation. It validates its own outputs, catches hallucinations, and automatically refines queries when the answers aren't good enough.

## Self-Correcting Pipeline

Built with **LangGraph**, the system runs a multi-step correction loop:

1. **Retrieval**: Hybrid BM25 + vector search across ChromaDB
2. **Relevance Grading**: LLM-based assessment of how relevant the retrieved docs actually are
3. **Generation**: Context-aware answer generation with LLaMA3
4. **Hallucination Check**: Verifies that generated answers are grounded in the source documents
5. **Quality Assessment**: Checks if the answer actually addresses the original question
6. **Auto-Correction**: Reformulates the query and re-retrieves if quality isn't good enough

## Multi-Modal Document Processing

- **PDF, DOCX, TXT, Markdown** ingestion with intelligent chunking
- **Recursive text splitting** with configurable chunk size and overlap
- **Metadata preservation** for source attribution

## Key Features

- **Hybrid Search** combining BM25 keyword matching with semantic vector similarity
- **Self-Correction Loop** with up to 3 automatic retry cycles and query reformulation
- **Hallucination Detection** ensuring answers stay grounded in retrieved context
- **Real-time Streaming** via WebSocket-based responses
- **Modern Dashboard** built with Next.js for document upload and chat

## Technologies

- **Python**: Backend pipeline
- **LLaMA3 (Ollama)**: Local LLM inference
- **ChromaDB**: Vector database
- **LangGraph**: Orchestration framework
- **FastAPI**: REST API
- **Next.js**: Frontend dashboard
- **Docker**: Containerized deployment

## Links

[View on GitHub](https://github.com/Technocrat-dev/RAG_CHATBOT)
