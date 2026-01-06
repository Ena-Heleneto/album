#!/bin/bash
set -e

# Shell-based MongoDB init script for `album` database and user.
# 可挂载到官方 MongoDB 镜像的 docker-entrypoint-initdb.d 中使用。

DB_NAME="album"
DB_USER="album"
DB_PASS="album"

# 兼容 mongo / mongosh 客户端
if command -v mongosh >/dev/null 2>&1; then
  MONGO_CLI="mongosh"
else
  MONGO_CLI="mongo"
fi

$MONGO_CLI <<EOF
use ${DB_NAME}
db.dropUser("${DB_USER}")
db.createUser({
  user: "${DB_USER}",
  pwd: "${DB_PASS}",
  roles: [
    { role: "readWrite", db: "${DB_NAME}" }
  ]
})
EOF

echo "MongoDB database '${DB_NAME}' and user '${DB_USER}' initialized."