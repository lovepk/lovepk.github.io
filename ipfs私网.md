### 安装docker
```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

### 公共仓库拉取ipfs镜像
``` docker pull ipfs/kubo ```

### 准备工作
1. 使用两个目录
``` export ipfs_data=/ipfs/node0/ipfs_data ``` 用来存放.ipfs文件的目录
``` export ipfs_staging=/ipfs/node0/ipfs_staging ``` 用来从IPFS导入和导出文件的目录

### 生成私网共用的私有key并共享私有key
1. 克隆私有key生成工具
``` git clone https://github.com/Kubuxu/go-ipfs-swarm-key-gen.git ```
2. 构建私钥生成工具
``` go build -o ipfs-swarm-key-gen main.go ```
生成一个名为ipfs-swarm-key-gen的二进制可执行文件
3. 使用ipfs-swarm-key-gen生产key文件
``` ipfs-swarm-key-gen > swarm.key ```
4. 将生成的swarm.key文件放到用户的.ipfs目录中
5. 将swarm.key复制到云服务器并移动到云服务器的.ipfs目录中
``` sudo mv swarm.key /ipfs/node0/ipfs_data/ ```

### 启动一个运行ipfs的容器，公开4001（P2P TCP/QUIC传输）、5001（RPC API）和8080（网关）端口
``` docker run -d --name ipfs_host -v $ipfs_staging:/export -v $ipfs_data:/data/ipfs -p 4001:4001 -p 4001:4001/udp -p 127.0.0.1:8080:8080 -p 127.0.0.1:5001:5001 ipfs/kubo:latest ```

### 查看容器启动log
``` docker logs -f ipfs_host ```

### 每个节点清空默认bootstrap列表
``` ipfs bootstrap rm —-all ```

### 重新互相添加节点
``` ipfs bootstrap add /ip4/${IP}/tcp/4001/ipfs/${peerID}```

内网连接云服务器节点，要使用云服务器的公网ip
### 每个节点启动ipfs守护进程
``` ipfs daemon ```

### 查看节点连接情况
``` ipfs swarm peers ```
