### docker安装
1. 云服务器脚本安装：
```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```
2. mac docker desktop客户端下载:
<https://docs.docker.com/desktop/install/mac-install/>

### docker 命令大全
<https://www.runoob.com/docker/docker-command-manual.html>

### docker hub 私有仓库的使用
1. 注册docker hub账号
2. 本地命令行登陆docker hub账号
``` docker login -u lovepk ```
3. 输入token
4. 将本地镜像打tag 生成符合docker hub仓库规则的新镜像
``` docker tag s100:0.0.1 lovepk/s100:0.0.1 ```
5. 推送到docker hub的私人仓库
``` docker push lovepk/s100:0.0.1 ```

### 云服务器从docker hub 私有仓库拉镜像
``` docker pull lovepk/s100:0.0.1 ```
