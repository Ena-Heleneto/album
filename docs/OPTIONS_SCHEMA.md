# Mongoose `SchemaOptions` 速查 🔧

> 说明：`defineMongooseModel` 的 `options` 会原样传给 `new Schema(..., options)`，用于控制整个 Schema 的行为（不是单个字段）。

---

## 目录

- 概览
- 常用选项（快速参考）
- 示例：User 模型（可复制）
- 按场景的推荐配置
- 注意与提示
- 参考

---

## 概览 💡

`SchemaOptions` 用于控制索引、时间戳、字段严格性、序列化等行为。默认行为适用于大多数场景，但在生产环境或分片/索引策略下常需调整。

---

## 常用选项（快速参考） ✅

| 选项                                |                 类型 |           默认 | 说明                                                 | 示例                                                            |
| ----------------------------------- | -------------------: | -------------: | ---------------------------------------------------- | --------------------------------------------------------------- |
| `collection`                        |               string |       自动生成 | 指定 Mongo 集合名（否则根据 model 名生成复数）       | `collection: 'user_accounts'`                                   |
| `timestamps`                        |    boolean \| object |        `false` | 自动维护 `createdAt` / `updatedAt`（可自定义字段名） | `timestamps: true` 或 `timestamps: { createdAt: 'created_at' }` |
| `autoIndex`                         |              boolean |         `true` | 应用启动时是否自动建索引（生产常关）                 | `autoIndex: false`                                              |
| `autoCreate`                        |              boolean |        `false` | 是否在初始化时自动 `createCollection()`              | `autoCreate: true`                                              |
| `strict`                            | boolean \| `'throw'` |         `true` | 是否禁止保存未定义字段（`'throw'` 会抛错）           | `strict: true`                                                  |
| `strictQuery`                       | boolean \| `'throw'` | same as strict | 控制查询条件中未定义字段的处理                       | `strictQuery: true`                                             |
| `minimize`                          |              boolean |         `true` | 是否删除空对象（如 `{ profile: {} }`）               | `minimize: false`                                               |
| `_id`                               |              boolean |         `true` | 是否自动添加 `_id` 字段                              | `_id: true`                                                     |
| `id`                                |              boolean |         `true` | 是否生成 `id` 虚拟 (string)                          | `id: false`                                                     |
| `versionKey`                        |      string \| false |        `'__v'` | 版本字段名或禁用版本                                 | `versionKey: false`                                             |
| `toJSON` / `toObject`               |               object |              — | 控制序列化（常用于删除敏感字段、开启虚拟字段）       | `{ toJSON: { virtuals: true } }`                                |
| `validateBeforeSave`                |              boolean |         `true` | 保存前是否自动验证                                   | `validateBeforeSave: true`                                      |
| `validateModifiedOnly`              |              boolean |        `false` | 只验证被修改的字段                                   | `validateModifiedOnly: true`                                    |
| `shardKey`                          |               object |              — | 分片键（分片集群中使用）                             | `shardKey: { userId: 1 }`                                       |
| `read`/`readConcern`/`writeConcern` |        string/object |              — | 默认读写偏好与级别                                   | `writeConcern: { w: 'majority' }`                               |

---

## 示例：User 模型（可直接复制） 📋

```ts
export const User = defineMongooseModel({
  name: 'User',
  schema: {
    email: { type: 'string', required: true, unique: true },
  },
  options: {
    collection: 'user_accounts',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    autoIndex: false, // 生产建议 false，开发时可 true
    autoCreate: true,
    strict: true,
    strictQuery: true,
    versionKey: '__v',
    minimize: false,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform(_doc, ret) { delete ret._id; delete ret.__v }
    },
    validateBeforeSave: true,
  },
  hooks(_schema) { },
})
```

---

## 按场景的推荐配置 ✅

- 开发环境（快速迭代）
  - `timestamps: true`, `autoIndex: true`, `autoCreate: true`

- 生产环境（稳定与性能）
  - `timestamps: true`, `autoIndex: false`, `autoCreate: false`, `strict: true`, `validateBeforeSave: true`

- 高一致性 / 副本集或分片
  - 设置 `writeConcern`, `readConcern`, `shardKey` 等，根据数据库架构调整

---

## 注意与提示 ⚠️

- **唯一索引（`unique: true`）是索引声明，而非验证**：需要 `autoIndex` 或手动建索引来生效。
- 在生产中建议关闭 `autoIndex` 并用迁移脚本或 DB 管理工具建索引以避免启动时性能问题。
- `timestamps: true` 会自动添加两个日期字段，若想自定义字段名请传对象。
- 使用 `'throw'` 模式（`strict: 'throw'`）能在数据不符合 schema 时尽早发现问题，但会抛错，需谨慎。

---

## 参考 🔗

- Mongoose 官方文档：Schema options（建议阅读原始文档以获取全部可用选项与细节）

---

如果你需要，我可以：

- ✅ 把以上内容更新为 `docs/OPTIONS_SCHEMA.md`（已完成）
- ✅ 根据你的业务（例如只存 email 的用户表）进一步细化并注释配置

需要我接着把这个文件提交到 git（`git add/commit`）吗？
