---
layout:  /src/layouts/ProjectLayout.astro
title: 'PriceScope'
pubDate: 2025-02-15
description: 'A production-grade multimodal deep learning system for marketplace price prediction. Trained on 1.48M Mercari listings with a BiLSTM + Attention + MLP fusion model achieving 0.430 RMSLE. Full stack with FastAPI, Next.js, and MongoDB.'
languages: ["python", "pytorch", "fastapi", "nextjs", "ts", "mongo", "docker"]
image:
  url: ""
  alt: "PriceScope marketplace price prediction"
--- 

A full end-to-end system for predicting product prices on marketplace platforms. Trained on 1.48 million Mercari product listings, it uses a multimodal deep learning model that understands both free-text product descriptions and structured metadata like brand, category, and condition.

## The Model

The architecture has three parallel branches that each handle a different input modality:

- **Text encoders**: Two bidirectional LSTMs (with optional self-attention) process product names and descriptions separately, encoding them into 128-dimensional representations
- **Categorical encoder**: Learned embeddings for brand, category (three levels), condition, and shipping, passed through a dense layer with batch normalization
- **Fusion MLP**: All three branches concatenate into a 576-dimensional vector, then pass through a 576 > 256 > 128 MLP with dropout for the final price regression

The model outputs log-transformed prices with a confidence range. On the held-out test set it hits 0.430 RMSLE, outperforming XGBoost (0.555) and LightGBM (0.559) because it can extract semantic signals from free-text that tree models can't access.

## ML Engineering

This is not just a notebook. The full pipeline includes:

- **Optuna hyperparameter tuning** with MedianPruner for early termination
- **Baseline comparison** against XGBoost, LightGBM, and Ridge regression on identical splits
- **SHAP explainability** using TreeExplainer on an XGBoost proxy model
- **ONNX export** with validation (outputs match PyTorch within 1e-4 tolerance)
- **Checkpoint/resume** for training runs with configurable schedulers

## Full Stack Deployment

The model serves predictions through a FastAPI backend with rate limiting, response caching, and optional API key auth. A Next.js frontend provides:

- **Prediction form** for entering product details and getting instant price estimates
- **Model dashboard** with training metrics, loss curves, and prediction history
- **Product explorer** with category analytics and full-text search

MongoDB handles data persistence for predictions and product catalogs, with indexed repositories for fast querying.

## Technologies

- **PyTorch**: BiLSTM + Attention + MLP fusion model
- **FastAPI**: REST API with Pydantic v2 validation
- **Next.js + TypeScript**: Frontend dashboard
- **MongoDB**: Data persistence
- **Docker + docker-compose**: Full-stack orchestration
- **GitHub Actions**: CI pipeline with lint, test, and Docker build

## Links

[View on GitHub](https://github.com/Technocrat-dev/Marketplace-Price-Prediction)
