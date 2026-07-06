---
layout:  /src/layouts/ProjectLayout.astro
title: 'Fleet Vehicle Data Gateway'
pubDate: 2025-02-05
description: 'A fully deployed real-time fleet monitoring platform with FastAPI, Next.js, WebSocket live updates, OAuth 2.0 authentication, and geofencing — live demo included.'
languages: ["python", "fastapi", "nextjs", "ts", "postgresql", "docker"]
image:
  url: ""
  alt: "Fleet Vehicle Data Gateway dashboard"
--- 

A **fully deployed** real-time fleet vehicle monitoring system that tracks a simulated fleet of 50+ vehicles with sub-second update latency — try the live demo below.

## Real-Time Monitoring

The platform provides a **live dashboard** showing vehicle positions, statuses, and telemetry data updated in real-time via **WebSocket** connections.

### Dashboard Features
- **Interactive Map** with real-time vehicle positions and movement trails
- **Vehicle Cards** showing speed, fuel level, engine status, location
- **Geofence Alerts** with configurable zones and entry/exit notifications
- **Fleet Analytics** for aggregate statistics and historical data

## Architecture

```
Edge Simulators -> FastAPI Backend -> PostgreSQL
                       |
               WebSocket Server -> Next.js Dashboard
```

- **Edge Simulators** generate realistic vehicle telemetry (GPS, speed, fuel, engine metrics)
- **FastAPI Backend** handles the RESTful API + WebSocket server with SQLAlchemy ORM
- **PostgreSQL** for persistent storage with Alembic migrations
- **Next.js Frontend** is a server-side rendered dashboard with Leaflet maps

## Security & Auth

- **Google OAuth 2.0** for secure authentication
- **JWT Tokens** for stateless session management
- **Role-Based Access** with admin and viewer roles

## Deployment

- **Backend** containerized and deployed on GCP Cloud Run
- **Frontend** on Vercel (preview + production deployments)
- **Database** on managed PostgreSQL
- **CI/CD** via GitHub Actions with linting, testing, and auto-deploy

## Technologies

- **FastAPI**: High-performance Python API
- **Next.js + TypeScript**: Modern React framework
- **PostgreSQL**: Relational database
- **WebSocket**: Real-time bidirectional communication
- **Docker**: Local development environment
- **OAuth 2.0**: Google authentication

## Links

[View on GitHub](https://github.com/Technocrat-dev/Fleet-Vehicle-Gateway)
[Check out the demo](https://fleet-vehicle-gateway.vercel.app/)