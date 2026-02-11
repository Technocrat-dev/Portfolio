---
layout:  /src/layouts/ProjectLayout.astro
title: 'Fleet Vehicle Data Gateway'
pubDate: 2025-02-05
description: 'A production-deployed real-time fleet monitoring platform with FastAPI, Next.js, WebSocket live updates, OAuth 2.0 authentication, and geofencing — deployed on Railway + Vercel.'
languages: ["python", "fastapi", "nextjs", "ts", "postgresql", "docker"]
image:
  url: ""
  alt: "Fleet Vehicle Data Gateway dashboard"
--- 

A **production-deployed** real-time fleet vehicle monitoring system that tracks 50+ vehicles with sub-second update latency. Built for a Woven by Toyota internship application showcase.

## Real-Time Monitoring

The platform provides a **live dashboard** showing vehicle positions, statuses, and telemetry data updated in real-time via **WebSocket** connections.

### Dashboard Features
- **Interactive Map** — Real-time vehicle positions with movement trails
- **Vehicle Cards** — Speed, fuel level, engine status, location
- **Geofence Alerts** — Configurable zones with entry/exit notifications
- **Fleet Analytics** — Aggregate statistics and historical data

## Architecture

```
Edge Simulators → FastAPI Backend → PostgreSQL
                      ↓
              WebSocket Server → Next.js Dashboard
```

- **Edge Simulators** — Generate realistic vehicle telemetry (GPS, speed, fuel, engine metrics)
- **FastAPI Backend** — RESTful API + WebSocket server with SQLAlchemy ORM
- **PostgreSQL** — Persistent storage with Alembic migrations
- **Next.js Frontend** — Server-side rendered dashboard with Leaflet maps

## Security & Auth

- **Google OAuth 2.0** — Secure authentication flow
- **JWT Tokens** — Stateless session management
- **Role-Based Access** — Admin and viewer roles

## Deployment

- **Backend** — Railway (auto-deploy from GitHub)
- **Frontend** — Vercel (preview + production deployments)
- **Database** — Railway PostgreSQL
- **CI/CD** — GitHub Actions with linting, testing, and auto-deploy

## Technologies

- **FastAPI** — High-performance Python API
- **Next.js + TypeScript** — Modern React framework
- **PostgreSQL** — Relational database
- **WebSocket** — Real-time bidirectional communication
- **Docker** — Local development environment
- **OAuth 2.0** — Google authentication

## Links

[View on GitHub](https://github.com/Technocrat-dev/fleet-vehicle-gateway)
