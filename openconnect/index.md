# 编译
1. windows系统通过WSL编译，因为openconnect是基于linux的。
2. [下载源码](https://gitlab.com/openconnect/openconnect.git "title")
3. [按照打包教程](https://www.infradead.org/openconnect/building.html)
   
# 连接后断开不能再连接的问题
windows关闭WSL，然后重新连接。windows命令行工具执行`wsl --shutdown`

## windows下编译openconnect
1. 安装msys2工具
2. 在msys2的安装目录中的用户目录中新建文件夹，然后[下载源码](https://gitlab.com/openconnect/openconnect.git "title")
3. 使用MSYS2 MINGW64命令行工具进行[按照打包教程](https://www.infradead.org/openconnect/building.html)
### 注意
执行./configure的时候如果/etc/vpnc/vpnc-script or /usr/share/vpnc-scripts/vpnc-script不存在，会导致执行错误。解决办法是手动指定vpnc-script。
例如：``` ./configure --with-vpnc-script=vpnc-script-min ```,具体指定到实体文件名，而不是目录名，不用带文件后缀名
vpnc-script-min文件可以到[这里下载](https://www.infradead.org/openconnect/vpnc-script.html)

# 驱动
## 手动安装驱动程序
可以参照[网址](https://www.infradead.org/openconnect/building.html)页面中的TUN/TAP driver。
## 可以使用动态链接库
参照[网址](https://gitlab.com/openconnect/openconnect-gui)项目中的```wintun```文件夹下的动态链接库，将对应系统版本的wintun.dll放到.libs文件夹中即可。

# 如何使用编译后的结果
## 直接使用openconnect源码编译后的可执行文件
可执行文件在根目录，同时根目录也生成了.libs文件夹，里面也有可执行文件。
## 使用openconnect源码编译后的开发包
生成的开发包在.libs文件夹中。
1. 如果是linux下生成的，库文件是.so结尾的。
2. 如果是windows下生成的，库文件是.a，.dll结尾的。
将源码根目录中的openconnect.h文件拷贝到项目中，再把生成的库文件拷贝到项目中。打包的时候指定静态库或动态库就行了。
## 注意
windows的话还要将libopenconnect-5.dll动态链接库文件复制到项目中。因为既需要静态链接库libopenconnect.dll.a，也需要动态链接库。
## 编译时指定链接库
1. windows: ``` gcc main.c ../openconnect/.libs/libopenconnect.dll.a -o main ```
2. linux: ``` gcc main.c ../openconnect/.libs/libopenconnect.so -o main ```

# 基于openconnnect二次封装自己的库，例如windows系统下
1. 基于openconnect源代码编译，生成.libs文件夹，里面含有开发包，.a和.dll文件。
2. 上面的main.c是可以直接编译运行的。可以基于相同的逻辑，封装一些函数,写好lib.h。参考lib.c和lib.h
3. 打包```gcc -shared -o lib.dll lib.c ../openconnect/.libs/libopenconnect.dll.a```生成lib.dll
4. 然后将libopenconnect-5.dll拷贝到项目目录中。

# 如何使用自己的库
1. 将lib.dll，libopenconnect-5.dll，wintun.dll，vpnc-script-win.js拷贝到另一个项目中即可。
2. 如果是在flutter项目中使用，需要管理员权限运行``` flutter run ```才行，因为vpnc-script-win.js和wintun.dll的执行需要管理员权限。

# 断开连接的问题
由于需要调用send函数向管道发送断开连接的信号，需要引入``` #include <winsock2.h> ```。并且打包的时候还需要链接```ws2_32```。
脚本是```gcc -shared -o lib.dll lib.c ../openconnect/.libs/libopenconnect.dll.a -lws2_32```

# Flutter工程C++侧调用dll的函数卡死的问题
使用c++的```std::thread```开启线程，可以防止耗时操作导致UI卡死。