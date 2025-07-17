# 前台项目 https方案

## 注意，该方案仅限开发环境，请勿发布到生产环境中

## 第一步 环境配置

### 本地安装openssl

这里使用了[Chocolatey](https://chocolatey.org/install)安装openssl，也可以到[openssl官网](https://openssl-library.org)下载安装

- 安装 Chocolatey

使用powershell 执行以下代码

```powershell
  Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

- 安装 openssl

使用powershell 执行以下代码

```powershell
 choco install openssl
```

### 验证 openssl

```powershell
openssl version
```

## 第二步 生成证书

- 切换到 证书生成路径

  - path 需替换为 自生成证书的路径

```powershell
cd {path}
# cd Desktop
```

- 生成证书

  - key-file-name 需替换为 自生成证书的文件名

  - crt-file-name 需替换为自生成证书的文件名

  - host 需替换为想要生成证书的域名

```powershell
openssl req -newkey rsa:2048 -nodes -keyout {key-file-name} -x509 -days 365 -out {crt-file-name} -subj "/CN={host}"
# openssl req -newkey rsa:2048 -nodes -keyout your-custom-domain.key -x509 -days 365 -out your-custom-domain.crt -subj "/CN=local.dgyiheda.com"
```

## 第三步

修改 web-back-end/index

### 读取证书 构建 证书对象

```js
const fs = require('node:fs')
const path = require('node:path')
const privateKeyPath = path.join(__dirname, 'your-custom-domain.key')
const certificatePath = path.join(__dirname, 'your-custom-domain.crt')

const privateKey = fs.readFileSync(privateKeyPath, 'utf8')
const certificate = fs.readFileSync(certificatePath, 'utf8')
const credentials = { key: privateKey, cert: certificate }
```

### 构建https服务

```js
const httpsServer = https.createServer(credentials, APP)
```

### 监听443端口

```js
const SSLPORT = 443

httpsServer.listen(SSLPORT, () => {
  console.log(`HTTPS Server is running on: https://test.dgyiheda.com:${SSLPORT}`)
})
```

### 完整示例

```js
const fs = require('node:fs')
const https = require('node:https')
const path = require('node:path')
const cookieParser = require('cookie-parser')
const { loadNuxt, build } = require('nuxt')
const { Server } = require('./src/main')

const privateKeyPath = path.join(__dirname, 'your-custom-domain.key')
const certificatePath = path.join(__dirname, 'your-custom-domain.crt')

const privateKey = fs.readFileSync(privateKeyPath, 'utf8')
const certificate = fs.readFileSync(certificatePath, 'utf8')
const credentials = { key: privateKey, cert: certificate }

const isDev = process.env.NODE_ENV !== 'production'

const APP = new Server().app

const httpsServer = https.createServer(credentials, APP)

APP.use(cookieParser())

async function start() {
  try {
    const NUXT = await loadNuxt(isDev ? 'dev' : 'start')

    APP.use(NUXT.render)

    if (isDev)
      build(NUXT)

    const SSLPORT = 443

    httpsServer.listen(SSLPORT, () => {
      console.log(`HTTPS Server is running on: https://test.dgyiheda.com:${SSLPORT}`)
    })
  }
  catch (error) {
    console.log(error)
  }
}

start()
```
