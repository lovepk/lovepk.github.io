### dockerfile定义应用暴露端口
``` EXPOSE 3009 ```
### 新建容器 宿主机端口和容器端口映射
``` docker run -it --net=host --name s100-admin s100:0.0.3 prod &```
``` grant all privileges on s100.* to 'wangjun'@'192.168.40.98'; ```
如果是修改：``` update mysql.user set host = "192.168.40.98" where user = "wangjun";```
``` flush privileges; ```
### 宿主机mysql，redis配置成可固定ip访问
1. redis配置
``` config set bind ip地址 ```
2. mysql
``` grant all privileges on s100.* to 'wangjun'@'192.168.40.98'; ```
``` flush privileges; ```
### 根据是否进行端口映射，宿主机选择开放对应的端口
1. 如果进行端口映射比如13009:3009，则要修改应用的连接redis，mysql的IP地址，一般是通过ifconfig 找到 docker0的网卡地址，将127.0.0.1换成对应地址即可，通常是172.17.0.1或者172.18.0.1，且宿主机要开放13009端口。
2. 如果不进行端口映射比如通过```docker run -it --net=host --name s100-admin s100:0.0.3 prod &```启动，则宿主机需要
开放3009端口即可。
### 系统防火墙开放了端口，云服务器也要开启虚拟防火墙的端口。
