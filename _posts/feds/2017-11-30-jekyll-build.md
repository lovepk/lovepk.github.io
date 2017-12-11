---
layout: article
category: feds
type: web
title: jekyll博客搭建流程
description: 你想免费拥有一个可以自定义风格的博客吗，其实很简单，选择jekyll吧！
---

# jekyll博客搭建流程

## jekyll简介

我眼中的jekyll好比是一个静态网站生成器，即使你不会html+css+js技术也没关系，github上有很多现成的模板。下载下来直接在_post目录下写文章就可以了。如果你想体验下从零到有的构建一个自己风格的jekyll，也是可以的。

## 下载安装

由于jekyll依赖ruby环境，首先我们要安装ruby,然后使用ruby自带的gem包管理器来下载jekyll,命令如下：

>gem install jekyll  

之后使用jekyll -v 命令查看其版本，有则安装成功了。ok下面从零开始吧：

1.  1.新建项目目录，如果项目是github page，我们也算是重新改造自己的github page了，想象一下：我们使用自己的jekyll写文章，然后构建，jekyll帮我们生成静态站点文件；然后我们使用git管理它并在完成后上传到github上，然后打开主页你会发现你好像有了一个网站。哪天你想改些东西，尽管在本地写即可，写完就push上去，是不是很方便。更方便的是jekyll支持本地预览。我们为什么这么做，因为github&nbsp;page本身就是一个jekyll项目，不信你新开通个账号，把它下载下来看看。   
2.  2.项目最基础的文件，index.html,_config.yml，后者的配置它告诉jekyll如何工作。其次是_data,_drafts,_includes,_layouts,_posts,_site这些目录。各目录的作用参见[官方文档](https://www.jekyll.com.cn/docs/structure/)。至于如何使用我是这样设计的：_posts里的文章放在_layouts里面的文章模板里，文章模板放入文章类别的模板里，在把文章类别模板放入default.html这个模板里，这个最外层的模板引入_includes里的固定布局，比如头部，底部，左aside，右aside等。纵观下来，就是嵌套的合理运用。  

3.  3.我们也可以在最外层模板里引入js，css来装饰我们的网站。开启jekyll serve后每次改动，都会往_site目录下生成最终的静态网站。  

4.  4.框架搭好之后就可以安心写文章内容了。  




