## Mysql安装
### 安装命令
```sudo apt-get update```
```sudo apt-get upgrade```
```sudo apt install mysql-server```
### 查看安装情况
```mysql --version```
```sudo systemctl status mysql```
```mysql -u root -p```
注意：```mysql -u root -p```命令后直接回车
### 创建一个用户并指定ip访问
``` create user 'wangjun'@'192.168.40.98' identified by '123$%^qwe'; ```
### 为用户设置权限
``` grant all privileges on s100.* to 'wangjun'@'192.168.40.98'; ```
1. ``` all privileges ``` 所有权限
2. ``` s100.* ``` s100数据库下所有表
3. ``` 'wangjun'@'192.168.40.98' ``` 用户名@主机
### 刷新配置
``` flush privileges; ```

## 数据库操作
### 查看数据库
```show databases;```
### 创建数据库
```create database s100;```







