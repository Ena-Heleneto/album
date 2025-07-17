# 手动搭建 VPN 或 SSR 的指南

本文档介绍了如何在 Windows 客户端仅能通过命令行安装软件的情况下，手动搭建 VPN（以 OpenVPN 为例）和 SSR（ShadowsocksR）的基本步骤，供参考选择。

---

## 方案一：使用 VPN（以 OpenVPN 为例）

### 前提条件

- 拥有一台可搭建 VPN 服务器的主机（例如 Linux 服务器或支持 OpenVPN 的路由器）。
- Windows 客户端需要安装 OpenVPN 客户端（支持命令行操作）。

### 搭建步骤

1. **搭建 VPN 服务器**

   - **安装 OpenVPN 和 Easy-RSA（以 Ubuntu 为例）：**
     ```bash
     sudo apt-get update
     sudo apt-get install openvpn easy-rsa
     ```
   - **生成证书与密钥：**
     - 使用 Easy-RSA 生成服务器证书、密钥及 Diffie-Hellman 参数。
   - **配置服务器端：**
     - 编辑 OpenVPN 的配置文件（如 `server.conf` 或 `openvpn.conf`），设置加密算法、VPN 网段、路由等。
   - **启动 OpenVPN 服务：**
     - 确保防火墙放行对应的 UDP/TCP 端口后启动服务。

2. **准备 Windows 客户端**
   - **安装 OpenVPN 客户端：**
     - 可通过命令行使用 Chocolatey 包管理器进行安装：
       ```cmd
       choco install openvpn
       ```
   - **配置客户端连接：**
     - 将服务器生成的客户端配置文件（如 `.ovpn` 文件）拷贝到 Windows 客户端。
   - **通过命令行连接：**
     ```cmd
     openvpn --config your-client.ovpn
     ```
   - **提示：**
     - 可以将启动命令写入批处理文件，实现自动启动。

---

## 方案二：使用 SSR（ShadowsocksR）

### 前提条件

- Windows 系统需要安装 Python（推荐 Python 3.x），并确保已加入环境变量。
- 获取 SSR 客户端代码，支持命令行运行。

### 搭建步骤

1. **安装 Python 环境**

   - 如果未安装，请访问 [Python 官网](https://www.python.org/) 下载并安装。

2. **获取 SSR 代码**

   - 使用 Git 克隆开源项目（例如：[shadowsocksr/shadowsocksr](https://github.com/shadowsocksr-backup/shadowsocksr)）：
     ```cmd
     git clone https://github.com/shadowsocksr-backup/shadowsocksr.git
     ```
   - 或者下载压缩包并解压到指定目录。

3. **配置 SSR 客户端**

   - 进入 SSR 目录，编辑配置文件（如 `config.json`），配置示例：
     ```json
     {
       "server": "服务器IP",
       "server_port": "端口",
       "password": "你的密码",
       "method": "aes-256-cfb",
       "protocol": "origin",
       "obfs": "plain",
       "local_address": "127.0.0.1",
       "local_port": 1080
     }
     ```
   - 参数说明：
     - `server`：SSR 服务器地址。
     - `server_port`：SSR 服务端口。
     - `password`：连接密码。
     - `method`：加密方式。
     - `protocol` 和 `obfs`：协议与混淆方式（需与服务端一致）。
     - `local_address` 与 `local_port`：本地代理设置，默认为 127.0.0.1:1080。

4. **启动 SSR 客户端**
   - 在命令行中进入 SSR 目录，执行启动命令：
     ```cmd
     python run.py -c config.json
     ```
   - 启动后，SSR 客户端将在本地开启一个 SOCKS 代理端口，配置浏览器或其他软件使用该代理。

### 注意事项

- SSR 客户端和服务端的参数必须匹配，否则无法建立连接。
- 如需实现自动启动或脚本化管理，可将启动命令整合到批处理脚本中。
- 建议阅读项目的 README 文档，了解更多高级配置及常见问题的解决方案。

---

## 总结

- **VPN（OpenVPN）**

  - **特点：** 提供全局加密和系统级流量保护。
  - **适用场景：** 适合需要全局隐私保护和访问地理限制内容的用户。
  - **配置复杂度：** 需要证书和密钥管理，配置较繁琐。

- **SSR（ShadowsocksR）**
  - **特点：** 针对网络封锁和审查进行绕过，通常只对指定应用或流量生效。
  - **适用场景：** 适合需要突破封锁且可接受局部代理的用户。
  - **配置复杂度：** 配置灵活，但需保证客户端和服务端参数匹配。

根据你的需求（仅能通过命令行安装软件），上述两种方案均可通过命令行完成配置和启动，选择哪种方案主要取决于你对全局加密保护或仅针对特定流量代理的需求。

---

希望这份指南对你有所帮助！
