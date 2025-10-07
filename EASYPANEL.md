# Deploy no EasyPanel - King Bilhar Landing Page

Guia para fazer deploy da aplicação no EasyPanel usando Docker Compose.

## 🚀 Configuração no EasyPanel

### 1. Criar Novo Projeto
1. Acesse seu painel do EasyPanel
2. Clique em "Create Project"
3. Escolha "Docker Compose"
4. Cole o conteúdo do `docker-compose.yml`

### 2. Configurar Variáveis de Ambiente
No EasyPanel, adicione as seguintes variáveis:

```env
META_ACCESS_TOKEN=seu_token_aqui
NODE_ENV=production
```

### 3. Escolher Serviço para Deploy

#### Opção A: Full-Stack (Recomendado)
- **Serviço:** `fullstack`
- **Porta:** `3000`
- **Inclui:** Frontend + Backend + API
- **Domínio:** Aponte para a porta 3000

#### Opção B: Frontend + Backend Separados
- **Frontend:** Serviço `frontend` na porta 80
- **Backend:** Serviço `backend` na porta 3001
- **Configuração:** Dois domínios diferentes ou subdomínios

## 📋 Docker Compose Otimizado para EasyPanel

### Para Full-Stack (Mais Simples)
```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.fullstack
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
      - META_ACCESS_TOKEN=${META_ACCESS_TOKEN}
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "node", "-e", "fetch('http://localhost:3000/api/health').then(r=>r.ok?process.exit(0):process.exit(1)).catch(()=>process.exit(1))"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### Para Arquitetura Separada
```yaml
version: '3.8'

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "80:80"
    restart: unless-stopped

  backend:
    build:
      context: .
      dockerfile: Dockerfile.backend
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
      - PORT=3001
      - META_ACCESS_TOKEN=${META_ACCESS_TOKEN}
    restart: unless-stopped
```

## 🔧 Configuração Passo a Passo

### 1. Preparar Repositório
```bash
# Certifique-se que todos os arquivos estão commitados
git add .
git commit -m "Add EasyPanel deployment config"
git push  
```

### 2. No EasyPanel
1. **Source:** Conecte seu repositório GitHub/GitLab
2. **Build Context:** Raiz do projeto (`/`)
3. **Dockerfile:** Escolha `Dockerfile.fullstack` para full-stack
4. **Port:** Configure para `3000` (full-stack) ou `80` (frontend)
5. **Environment Variables:** Adicione `META_ACCESS_TOKEN`

### 3. Configurar Domínio
1. Vá em "Domains"
2. Adicione seu domínio personalizado
3. Configure SSL (automático no EasyPanel)
4. Aponte para a porta correta (3000 para full-stack)

## 🌐 URLs Após Deploy

### Full-Stack
- **Site:** `https://seudominio.com`
- **API:** `https://seudominio.com/api/health`
- **Meta Events:** `https://seudominio.com/api/meta-event`

### Frontend + Backend Separados
- **Site:** `https://seudominio.com` (porta 80)
- **API:** `https://api.seudominio.com` (porta 3001)

## 🔍 Monitoramento

### Health Checks
O EasyPanel automaticamente monitora:
- Status do container
- Health check endpoint
- Logs em tempo real

### Logs Úteis
```bash
# No EasyPanel, vá em "Logs" para ver:
- Startup do servidor
- Eventos enviados para Meta
- Erros de API
- Requests HTTP
```

## 🚨 Troubleshooting

### Problemas Comuns

1. **Build Falha**
   - Verifique se `package.json` está na raiz
   - Confirme que `Dockerfile.fullstack` existe
   - Veja logs de build no EasyPanel

2. **Container não Inicia**
   - Verifique variável `META_ACCESS_TOKEN`
   - Confirme porta configurada (3000)
   - Veja logs do container

3. **API não Funciona**
   - Teste health check: `/api/health`
   - Verifique token da Meta
   - Confirme CORS no código

### Comandos de Debug
```bash
# Testar localmente antes do deploy
docker-compose up fullstack

# Verificar se API responde
curl http://localhost:3000/api/health

# Testar evento Meta
curl -X POST http://localhost:3000/api/meta-event \
  -H "Content-Type: application/json" \
  -d '{"eventName":"PageView"}'
```

## 📝 Checklist de Deploy

- [ ] Repositório atualizado no GitHub/GitLab
- [ ] `META_ACCESS_TOKEN` configurado no EasyPanel
- [ ] Dockerfile correto selecionado
- [ ] Porta configurada (3000 para full-stack)
- [ ] Domínio apontado corretamente
- [ ] SSL configurado
- [ ] Health check funcionando
- [ ] Teste de evento Meta realizado

## 🎯 Recomendação

**Use a opção Full-Stack** (`Dockerfile.fullstack`) para simplicidade:
- Um único container
- Uma única porta (3000)
- Frontend e API juntos
- Mais fácil de gerenciar
- Ideal para a maioria dos casos

Apenas use frontend/backend separados se você precisar de escalabilidade independente ou arquitetura de microserviços.