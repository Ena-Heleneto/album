#!/usr/bin/env bash
set -e

# 只在 WSL 下执行 docker compose
if ! grep -qi microsoft /proc/version; then
  echo "[non-WSL] skip docker compose down"
  exit 0
fi

echo "[WSL] stopping docker compose for aux services"

docker compose -f .devcontainer/wsl/docker-compose.wsl.yml down -v
