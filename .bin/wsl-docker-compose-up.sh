#!/usr/bin/env bash
set -e

# 只在 WSL 下执行 docker compose
if ! grep -qi microsoft /proc/version; then
  echo "[non-WSL] skip docker compose on folder open"
  exit 0
fi

echo "[WSL] starting docker compose for aux services"

# 启动依赖服务并立即退出
docker compose -f .devcontainer/wsl/docker-compose.wsl.yml up -d
