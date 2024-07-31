### 远程下载mysql镜像
``` docker pull mysql ```
### 生成一个mysql容器 初始化登陆密码
``` docker run --name s100-mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest ```
### 进入s100-mysql容器同时打开mysql命令行
``` docker exec -it s100-mysql bash ```
### 登陆
``` mysql -u root -p```
### 创建一个用户并指定ip访问
``` create user 'wangjun'@'192.168.40.98' identified by '123$%^qwe'; ```
### 为用户设置权限
``` grant all privileges on s100.* to 'wangjun'@'192.168.40.98'; ```
1. ``` all privileges ``` 所有权限
2. ``` s100.* ``` s100数据库下所有表
3. ``` 'wangjun'@'192.168.40.98' ``` 用户名@主机
### 刷新配置
``` flush privileges; ```
# 但是 不推荐用ip访问，容器和容器之间用docker的network连接
# 以上mysql用户权限的配置适合非mysql容器化的情况

# 正文：
## 应用容器和mysql容器的连接
0. 修改应用代码中mysql，redis连接的配置 ``` DbHost = s100-mysql ``` ``` RedisAddr = s100-redis:6379 ```
1. docker network 相关命令<https://juejin.cn/post/6968668297130672159>
2. ``` docker network create -d bridge net-s100 ``` 创建一个自定义网络
3. 创建mysql容器并且加入自定义网络，``` docker run --name s100-mysql --network net-s100 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest ```
4. 创建redis容器并且加入自定义网络，``` docker run --name s100-redis --network net-s100 -d redis ```
5. 创建服务器应用容器，并且加入自定义网络，``` docker run -it --name s100-admin --network net-s100 -p 13009:3009 lovepk/s100:test ```
6. 修改/etc/sysctl.conf文件，设置net.ipv4.ip_forward=1
7. 云服务器设置13009端口开放