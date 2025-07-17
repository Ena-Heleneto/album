---
date: 2025-3-19
tag: [工具]
node: [MongoDB]
status: draft

title: 使用docker compose 搭建 mongo 副本集
description:
---

#

##

```sh
openssl rand -base64 666 > keyfile.key

```

## docker compose 内容

```yml
services:
  mongo-primary:
    image: mongo
    container_name: mongo-primary
    ports:
      - '4141:27017'
    environment:
      MONGO_INITDB_ROOT_USERNAME: ena@12138
      MONGO_INITDB_ROOT_PASSWORD: ena@12138
    volumes:
      - ./docker_volumes/mongo-primary:/data/db
      - ./keyfile.key:/data/keyfile.key
    command: mongod --replSet rs0 --bind_ip_all --keyFile /data/keyfile.key
    networks:
      - server-network
    entrypoint:
      - bash
      - -c
      - |
        chmod 400 /data/keyfile.key
        chown 999:999 /data/keyfile.key
        exec docker-entrypoint.sh $$@

  mongo-replicate:
    image: mongo
    container_name: mongo-replicate
    ports:
      - '4142:27017'
    environment:
      MONGO_INITDB_ROOT_USERNAME: ena@12138
      MONGO_INITDB_ROOT_PASSWORD: ena@12138
    volumes:
      - ./docker_volumes/mongo-replicate:/data/db
      - ./keyfile.key:/data/keyfile.key
    command: mongod --replSet rs0 --bind_ip_all --keyFile /data/keyfile.key
    networks:
      - server-network
    entrypoint:
      - bash
      - -c
      - |
        chmod 400 /data/keyfile.key
        chown 999:999 /data/keyfile.key
        exec docker-entrypoint.sh $$@

  mongo-arbiter:
    image: mongo
    container_name: mongo-arbiter
    ports:
      - '4143:27017'
    environment:
      MONGO_INITDB_ROOT_USERNAME: ena@12138
      MONGO_INITDB_ROOT_PASSWORD: ena@12138
    volumes:
      - ./docker_volumes/mongo-arbiter:/data/db
      - ./keyfile.key:/data/keyfile.key
    command: mongod --replSet rs0 --bind_ip_all --keyFile /data/keyfile.key
    networks:
      - server-network
    entrypoint:
      - bash
      - -c
      - |
        chmod 400 /data/keyfile.key
        chown 999:999 /data/keyfile.key
        exec docker-entrypoint.sh $$@

networks:
  server-network:
    external: true
```

##

```js
rs.initiate({
  _id: 'rs0',
  members: [
    { _id: 0, host: '190.92.233.141:4141' },
    { _id: 1, host: '190.92.233.141:4142' },
    { _id: 2, host: '190.92.233.141:4143' }
  ]
})
```
