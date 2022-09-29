### Mac安装ipfs工具
1. 打开<https://github.com/ipfs/kubo/releases>下载安装包
### 配置环境变量
1. 查看当前环境变量配置情况
```
echo $PATH
```
2. 打开配置文件
``` 
sudo vim ~/.bash_profile
```
3. 添加配置
```
export PATH="/Users/wangjun/kubo:$PATH"
```
### 节点配置
```
cd ~/.ipfs
export EDITOR=/usr/bin/vim
ipfs config edit

```
### 开启守护进程
``` ipfs daemon ```
### 5001端口被占用的情况
```ipfs config edit ```
1. 找到所有配置5001端口的地方
2. 替换成5002端口

### 免费存储网站
1. 图形化上传工具nftup<https://nft.storage/docs/how-to/nftup/> （很少用）
2. 前端接入文档<https://nft.storage/docs/client/js/>

### 添加前端静态目录
执行：
```
ipfs add -r /Users/wangjun/Documents/www/myApp/app-h5/dao
```
生成：
```QmYHV4z8Qy4nKeCn96kvcvsUWgDvJ2BtEqeKo8TcuLAwVp```

### IPNS:发布生成固定cid（后续发布cid不变）
执行：
```
ipfs name publish QmYHV4z8Qy4nKeCn96kvcvsUWgDvJ2BtEqeKo8TcuLAwVp --allow-offline
```
生成
``` k51qzi5uqu5di8kj531yl13sir5g743sck9f34uawp6shpkohmo6lpsrr8r6ux ```

### 白嫖nft.storage
#### 开启守护进程
``` ipfs daemon ```
#### 通过kubo上传文件
<http://localhost:5002/ipfs/bafybeibozpulxtpv5nhfa2ue3dcjx23ndh3gwr5vwllk7ptoyfwnfjjr4q/#/>
#### IPNS发布(绑定一次后每次发布公共密钥哈希（简称pubkeyhash）不变) （pubkeyhash：k51qzi5uqu5di8kj531yl13sir5g743sck9f34uawp6shpkohmo6lpsrr8r6ux）
```
ipfs name publish 新的CID
```
#### 通过kubo下载car文件

#### 在nft.storage上传car文件

#### 前端vite.config.js配置固定地址
```
  base: process.env.NODE_ENV === 'production' ? 'https://k51qzi5uqu5di8kj531yl13sir5g743sck9f34uawp6shpkohmo6lpsrr8r6ux.ipns.dweb.link/' : '/',
```
#### 如何访问
```
https://k51qzi5uqu5di8kj531yl13sir5g743sck9f34uawp6shpkohmo6lpsrr8r6ux.ipns.dweb.link/index.html#/

```
