# Deployment Guide - King Bilhar Landing Page

Este projeto oferece múltiplas opções de deployment para atender diferentes necessidades de infraestrutura.

## 📋 Opções de Deployment

### 1. Frontend Apenas (Atual)
**Arquivo:** `Dockerfile`
- Serve apenas arquivos estáticos via Nginx
- Ideal para: Sites estáticos, CDN deployment
- Porta: 80

```bash
# Build e run
docker build -t kingbilhar-frontend .
docker run -p 80:80 kingbilhar-frontend

# Ou usando docker-compose
docker-compose up frontend
```

### 2. Full-Stack (Frontend + Backend)
**Arquivo:** `Dockerfile.fullstack`
- Serve frontend estático + API do Meta Conversions
- Ideal para: Deployment simples, single container
- Porta: 3000

```bash
# Build e run
docker build -f Dockerfile.fullstack -t kingbilhar-fullstack .
docker run -p 3000:3000 -e META_ACCESS_TOKEN=your_token kingbilhar-fullstack

# Ou usando docker-compose
docker-compose up fullstack
```

### 3. Backend Apenas
**Arquivo:** `Dockerfile.backend`
- Serve apenas a API do Meta Conversions
- Ideal para: Arquitetura de microserviços
- Porta: 3001

```bash
# Build e run
docker build -f Dockerfile.backend -t kingbilhar-backend .
docker run -p 3001:3001 -e META_ACCESS_TOKEN=your_token kingbilhar-backend

# Ou usando docker-compose
docker-compose up backend
```

## 🔧 Configuração

### Variáveis de Ambiente
Copie `.env.example` para `.env` e configure:

```bash
cp .env.example .env
```

**Variáveis obrigatórias:**
- `META_ACCESS_TOKEN`: Token de acesso da Meta Conversions API

**Variáveis opcionais:**
- `NODE_ENV`: Ambiente (production/development)
- `PORT`: Porta do servidor (padrão: 3000 para fullstack, 3001 para backend)

### Health Checks
Todos os deployments incluem health checks:
- Frontend: `http://localhost:80`
- Fullstack: `http://localhost:3000/api/health`
- Backend: `http://localhost:3001/api/health`

## 🚀 Deploy em Produção

### Docker Compose (Recomendado)
```bash
# Para full-stack
docker-compose up -d fullstack

# Para frontend + backend separados
docker-compose up -d frontend backend
```

### Kubernetes
Para deployment em Kubernetes, use os Dockerfiles como base e configure:
- ConfigMaps para variáveis de ambiente
- Secrets para tokens sensíveis
- Services para exposição de portas
- Ingress para roteamento

### Cloud Providers

**Vercel/Netlify (Frontend apenas):**
- Use o `Dockerfile` original
- Configure variáveis de ambiente no painel

**Railway/Render (Full-stack):**
- Use `Dockerfile.fullstack`
- Configure `META_ACCESS_TOKEN` nas variáveis de ambiente

**AWS/GCP/Azure:**
- Use qualquer Dockerfile conforme sua arquitetura
- Configure Load Balancers e Auto Scaling conforme necessário

## 📊 Monitoramento

### Logs
```bash
# Ver logs do container
docker-compose logs -f fullstack

# Ver logs específicos da API
curl http://localhost:3000/api/health
```

### Métricas
- Health checks automáticos a cada 30s
- Logs estruturados para eventos da Meta
- Status codes HTTP apropriados

## 🔒 Segurança

- Containers rodam com usuário não-root (backend)
- Tokens sensíveis via variáveis de ambiente
- CORS configurado adequadamente
- Health checks para detecção de falhas

## 🛠️ Desenvolvimento Local

```bash
# Frontend
npm run dev

# Backend
npm run server

# Ambos simultaneamente
npm run dev & npm run server
```

## 📝 Notas Importantes

1. **Token da Meta**: Obtenha seu token em [Meta Business](https://business.facebook.com)
2. **CORS**: Configure domínios permitidos em produção
3. **SSL**: Use HTTPS em produção para a API funcionar corretamente
4. **Backup**: Considere backup dos logs de eventos para auditoria