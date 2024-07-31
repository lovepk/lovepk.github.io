## Redis安装
### 安装命令
```sudo apt-get update```
```sudo apt-get upgrade```
```sudo apt install redis-server```
### 查看安装情况
1. 启动
```redis-server```
2. 查看 redis 是否启动
```redis-cli```

### 通过sftp文件传输rdb文件实现数据迁移方案：
1. 先停掉redis服务```systemctl stop redis```
2. 查看是否停掉服务 ```ps aux | grep redis```
3. 确认停掉后通过sftp文件传输rdb文件到服务器
4. 重启redis服务```systemctl start redis```
