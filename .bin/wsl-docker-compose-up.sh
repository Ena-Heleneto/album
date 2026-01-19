#!/usr/bin/env bash
# set -e

# # 只在 WSL 下执行 docker compose
# if ! grep -qi microsoft /proc/version; then
#   echo "[non-WSL] skip docker compose on folder open"
#   exit 0
# fi

# echo "[WSL] starting docker compose for aux services"

# # 启动依赖服务并立即退出
# docker compose -f .devcontainer/wsl/docker-compose.wsl.yml up -d


set -euo pipefail

# 只在 WSL 下执行 docker compose
if ! grep -qi microsoft /proc/version; then
  echo "[non-WSL] skip docker compose on folder open"
  exit 0
fi

echo "[WSL] starting docker compose for aux services"

NETWORK="${DOCKER_NETWORK:-workspace-network}"

echo "[WSL] ensuring docker network exists: ${NETWORK}"
if ! docker network inspect "${NETWORK}" >/dev/null 2>&1; then
  echo "[WSL] creating docker network: ${NETWORK}"
  docker network create \
    --driver bridge \
    --attachable \
    "${NETWORK}" >/dev/null
fi

echo "[WSL] starting docker compose for aux services"
# docker compose up -d
docker compose -f .devcontainer/wsl/docker-compose.wsl.yml up -d