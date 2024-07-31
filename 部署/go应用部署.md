### 打包
修改本地配置
```set GOARCH=amd64```
```set GOOS=linux```
```go build -o s100```
### SFTP应用传到服务器
静态文件也要上传
### 修改文件权限
```chmod 777 s100```
### 服务器端口
1. 防火墙开放端口
```firewall-cmd --zone=public --add-port=3009/tcp --permanent```
```firewall-cmd --zone=public --add-port=80/tcp --permanent```
```firewall-cmd --reload```
2. 查看防火墙所有开放的端口
```firewall-cmd --zone=public --list-ports```
3. 查看所有已经被监听的端口
```netstat -aptn```
### 运行程序
```./s100 prod &```
### 查看进程
```ps aux```

### 测试服务器能否发送邮件
```telnet smtp.163.com 25```