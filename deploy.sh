#!/bin/bash

# Deploy script for King Bilhar Landing Page
# Usage: ./deploy.sh [frontend|fullstack|backend]

set -e

DEPLOY_TYPE=${1:-fullstack}
IMAGE_NAME="kingbilhar-${DEPLOY_TYPE}"
CONTAINER_NAME="kingbilhar-${DEPLOY_TYPE}-container"

echo "🚀 Deploying King Bilhar Landing Page - ${DEPLOY_TYPE} mode"

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Load environment variables
if [ -f .env ]; then
    echo "📋 Loading environment variables from .env"
    export $(cat .env | grep -v '^#' | xargs)
else
    echo "⚠️  No .env file found. Using .env.example as reference."
    echo "   Please create .env file with your configuration."
fi

# Stop and remove existing container
echo "🛑 Stopping existing container (if any)..."
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

# Build image based on deploy type
case $DEPLOY_TYPE in
    "frontend")
        echo "🏗️  Building frontend-only image..."
        docker build -t $IMAGE_NAME .
        PORT=80
        ;;
    "fullstack")
        echo "🏗️  Building full-stack image..."
        docker build -f Dockerfile.fullstack -t $IMAGE_NAME .
        PORT=3000
        ;;
    "backend")
        echo "🏗️  Building backend-only image..."
        docker build -f Dockerfile.backend -t $IMAGE_NAME .
        PORT=3001
        ;;
    *)
        echo "❌ Invalid deploy type. Use: frontend, fullstack, or backend"
        exit 1
        ;;
esac

# Run container
echo "🚀 Starting container on port $PORT..."

if [ "$DEPLOY_TYPE" = "frontend" ]; then
    docker run -d \
        --name $CONTAINER_NAME \
        -p $PORT:$PORT \
        --restart unless-stopped \
        $IMAGE_NAME
else
    # Backend or fullstack - need environment variables
    if [ -z "$META_ACCESS_TOKEN" ]; then
        echo "⚠️  META_ACCESS_TOKEN not set. API functionality may not work."
    fi
    
    docker run -d \
        --name $CONTAINER_NAME \
        -p $PORT:$PORT \
        -e NODE_ENV=production \
        -e PORT=$PORT \
        -e META_ACCESS_TOKEN="$META_ACCESS_TOKEN" \
        --restart unless-stopped \
        $IMAGE_NAME
fi

# Wait for container to start
echo "⏳ Waiting for container to start..."
sleep 5

# Check if container is running
if docker ps | grep -q $CONTAINER_NAME; then
    echo "✅ Container started successfully!"
    echo "📱 Application available at: http://localhost:$PORT"
    
    if [ "$DEPLOY_TYPE" != "frontend" ]; then
        echo "🏥 Health check: http://localhost:$PORT/api/health"
        echo "🔗 API endpoint: http://localhost:$PORT/api/meta-event"
    fi
    
    echo ""
    echo "📋 Useful commands:"
    echo "   View logs: docker logs -f $CONTAINER_NAME"
    echo "   Stop: docker stop $CONTAINER_NAME"
    echo "   Remove: docker rm $CONTAINER_NAME"
else
    echo "❌ Container failed to start. Check logs:"
    docker logs $CONTAINER_NAME
    exit 1
fi