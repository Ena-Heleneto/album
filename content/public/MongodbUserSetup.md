---
date: 2025-3-19
tag: [工具]
node: [MongoDB]
status: draft

title: mongodb 如何创建用户
description:
---

#

##

```
db.createUser({
  user: "Ena_Heleneto_Learn_Blog",
  pwd: "Ena_Heleneto_Learn_Blog",
  roles: [
    { role: "dbOwner", db: "learn-blog" },
  ]
})
https://www.mongodb.com/zh-cn/docs/manual/reference/built-in-roles/#mongodb-atlas-built-in-roles
```
