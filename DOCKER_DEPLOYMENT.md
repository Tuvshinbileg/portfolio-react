# Docker Deployment Guide

This Next.js project has been configured for Docker deployment.

## Files Created

- **Dockerfile**: Multi-stage build for optimized production image
- **docker-compose.yml**: Docker Compose configuration for local testing
- **.dockerignore**: Excludes unnecessary files from Docker build

## Prerequisites

- Docker (v20.10+)
- Docker Compose (optional, for easier local testing)

## Building the Docker Image

```bash
# Build the image
docker build -t portfolio-app:latest .

# Or with a specific tag
docker build -t portfolio-app:1.0.0 .
```

## Running the Container

### Using Docker directly:
```bash
docker run -p 3000:3000 portfolio-app:latest
```

### Using Docker Compose:
```bash
docker-compose up -d
```

The application will be available at `http://localhost:3000`

## Stopping the Container

### Docker Compose:
```bash
docker-compose down
```

### Docker:
```bash
docker stop <container-id>
docker rm <container-id>
```

## Key Optimizations

1. **Multi-stage Build**: Reduces final image size by not including build dependencies
2. **Standalone Output**: Next.js generates a standalone server that requires only Node.js
3. **Non-root User**: Application runs as the `nextjs` user for improved security
4. **Alpine Linux**: Using lightweight Alpine base image to minimize image size

## Environment Variables

To pass environment variables to the container:

```bash
docker run -p 3000:3000 -e NODE_ENV=production portfolio-app:latest
```

Or in `docker-compose.yml`, add to the `environment` section.

## Deploying to Production

### Docker Hub/Registry
```bash
docker tag portfolio-app:latest your-username/portfolio-app:latest
docker push your-username/portfolio-app:latest
```

### Kubernetes
A basic deployment would use:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: portfolio-app
  template:
    metadata:
      labels:
        app: portfolio-app
    spec:
      containers:
      - name: portfolio-app
        image: your-username/portfolio-app:latest
        ports:
        - containerPort: 3000
```

### Cloud Platforms
- **AWS**: Use ECS or App Runner with the Docker image
- **Google Cloud**: Use Cloud Run or GKE
- **Azure**: Use Container Instances or App Service
- **Heroku**: Update `Procfile` and use Container Registry

## Troubleshooting

### Image is too large
- Ensure `.dockerignore` has the right patterns
- Verify multi-stage build is being used

### Port conflicts
- Change the host port: `docker run -p 8000:3000 portfolio-app:latest`

### Permissions denied
- Ensure Docker daemon is running
- Add your user to the docker group: `sudo usermod -aG docker $USER`

## Next Steps

1. Build the image: `docker build -t portfolio-app:latest .`
2. Test locally: `docker run -p 3000:3000 portfolio-app:latest`
3. Push to registry: `docker push your-registry/portfolio-app:latest`
4. Deploy to your chosen platform
