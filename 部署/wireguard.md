### 安装WireGuard软件包
``` sudo apt update ```
``` sudo apt install wireguard-tools ```

### 生成公钥和私钥
``` wg genkey | sudo tee /etc/wireguard/privatekey | wg pubkey | sudo tee /etc/wireguard/publickey ```

### 创建WireGuard配置文件
``` touch wg.conf ```
