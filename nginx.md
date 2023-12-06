安装 Nginx 在 Ubuntu 服务器上可以通过终端进行。以下是安装 Nginx 的步骤：

### 步骤 1：更新软件包列表
使用以下命令来更新服务器的软件包列表，确保你安装的软件是最新版本：

```bash
sudo apt update
```

### 步骤 2：安装 Nginx
使用以下命令来安装 Nginx：

```bash
sudo apt install nginx
```

### 步骤 3：启动 Nginx
安装完成后，Nginx 会自动启动。如果没有自动启动，你可以使用以下命令手动启动：

```bash
sudo systemctl start nginx
```

### 步骤 4：检查 Nginx 状态
你可以使用以下命令检查 Nginx 的状态，确认是否已成功安装并正在运行：

```bash
sudo systemctl status nginx
```

### 步骤 5：访问 Nginx 欢迎页面
在浏览器中输入你的服务器 IP 地址或域名，你应该能够看到 Nginx 默认的欢迎页面。如果你使用的是本地服务器，可以在浏览器中输入 `http://localhost` 或 `http://127.0.0.1`。

### 配置文件位置
Nginx 的主要配置文件位于 `/etc/nginx/nginx.conf`。站点特定的配置文件通常位于 `/etc/nginx/sites-available/` 目录下，并通过符号链接连接到 `/etc/nginx/sites-enabled/` 目录。

安装完成后，你可以在 `/var/www/html` 目录中找到默认的网站文件。

通过这些步骤，你就可以在 Ubuntu 服务器上安装和配置 Nginx，并开始使用它来托管网站或进行其他网络服务。