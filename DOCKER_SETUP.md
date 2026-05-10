# Docker Setup

This project now includes Docker and Docker Compose configuration for easy development and deployment.

## 🚀 Quick Start

### Prerequisites
- Docker Desktop installed and running
- Docker Compose (included with Docker Desktop)

### Running the Application

1. **Start both services:**
   ```bash
   docker-compose up
   ```

2. **Run in detached mode:**
   ```bash
   docker-compose up -d
   ```

3. **Stop services:**
   ```bash
   docker-compose down
   ```

### Access Points
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 📁 Project Structure

```
ai_video/
├── backend/
│   ├── Dockerfile          # Backend container configuration
│   ├── .dockerignore      # Optimizes build context
│   └── main.py            # FastAPI application
├── frontend/
│   ├── Dockerfile          # Frontend container configuration
│   ├── .dockerignore      # Optimizes build context
│   └── vite.config.js     # Vite configuration
└── docker-compose.yml     # Main orchestration file
```

## 🔧 Configuration Details

### Backend (FastAPI)
- **Base Image**: Python 3.11-slim
- **Port**: 8000
- **Database**: SQLite (persistent via volume)
- **Live Reload**: Code changes automatically reflected

### Frontend (React + Vite)
- **Base Image**: Node 18-alpine
- **Port**: 3000
- **Hot Reload**: Code changes automatically reflected
- **Network Access**: Configured for Docker environment

### Docker Compose Features
- **Bridge Network**: Services can communicate via service names
- **Volume Mounts**: Live code reloading during development
- **Environment Variables**: Proper CORS and API URL configuration
- **Dependency Management**: Frontend waits for backend to be ready

## 🛠 Development Workflow

1. **Make code changes** - Files are synced into containers
2. **Auto-reload** - Both frontend and backend restart automatically
3. **Debug logs** - View with `docker-compose logs [service]`
4. **Access containers** - `docker-compose exec [service] sh`

### Useful Commands
```bash
# View logs
docker-compose logs frontend
docker-compose logs backend

# Access container shell
docker-compose exec frontend sh
docker-compose exec backend sh

# Rebuild specific service
docker-compose up --build frontend

# Clean up everything
docker-compose down -v --rmi all
```

## 🔒 CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (local development)
- `http://frontend:3000` (Docker service name)

## 📝 Environment Variables

### Backend
- `DATABASE_URL=sqlite:///./customers.db`

### Frontend
- `VITE_API_URL=http://localhost:8000`

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Check what's using the port
lsof -i :3000
lsof -i :8000

# Kill the process
kill -9 <PID>
```

### Container Issues
```bash
# Check container status
docker-compose ps

# View detailed logs
docker-compose logs -f [service-name]

# Rebuild from scratch
docker-compose down
docker-compose build --no-cache
docker-compose up
```

### Frontend Not Accessible
If localhost:3000 doesn't work, check that Vite is configured to bind to 0.0.0.0 (already configured in this setup).

## 🚀 Production Deployment

For production, consider:
- Using multi-stage builds to reduce image size
- Adding health checks to docker-compose.yml
- Using environment-specific configurations
- Implementing proper secrets management

## 📚 Additional Resources

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [FastAPI Docker Deployment](https://fastapi.tiangolo.com/deployment/docker/)
- [Vite Docker Configuration](https://vitejs.dev/guide/build.html#docker-deployment)
