### dockerfile定义应用暴露端口
``` EXPOSE 3009 ```
### 新建容器 宿主机端口和容器端口映射
``` docker run -it --name s100-admin -p 13009:3009 s100:0.0.3 ```
### 宿主机mysql，redis配置成可固定ip访问
1. redis配置
``` config set bind ip地址 ```
2. mysql
``` grant all privileges on s100.* to 'wangjun'@'192.168.40.98'; ```
``` flush privileges; ```