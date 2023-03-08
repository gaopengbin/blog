---
title: 【GIT使用】自动化更新部署
date: 2023/03/08
tags:
 - GIT
categories:
 - 学习
---



# Github Actions配合Github Pages实现项目自动化打包更新部署

首先，我想用这个是因为要搭一个博客，用的vuepress-reco这个模板，基于vuepress的嘛大家用的挺多的，非常方便就搭建好了，ok，打包部署到我的云服务器上，到这里都很顺利。但是vuepress毕竟还是个静态网站生成器，那我每次写一个md要放进去还得重新打包一次部署一次啊，多麻烦啊，但当时我还不知道github actions这个好东西，我就有了下面这个奇葩的思路：

我先搞了个写md的页面，写完点击保存就调用后台接口，把文件存在服务器上项目对应的文件夹中，然后调用一个bat命令在服务器上进行打包，等打包完就行了。我在本地测的还挺成功的，不过在服务器上打包老是失败，很无语，我甚至还尝试了直接运行项目。。虽然成功了，但是在云服务器上搞这些不合适。。。

后来我发现了这个东西，心想这不是和我的思路差不多吗，于是就找教程试了试。

## 新建一个repository

用来存放项目，注意一定要public，不然后面开启pages的时候就不行了。

![](https://raw.githubusercontent.com/gaopengbin/PicRepo/main/20230308155000.png)

## 新建一个Workflow

就是告诉github在你的项目提交更新后，它要做些什么，这里有很多模板，我就想要一个能打包部署的。

![](https://raw.githubusercontent.com/gaopengbin/PicRepo/main/20230308155722.png)

```yml
name: CI Github Pages
on:
  #监听push操作
  push:
    branches:
      - main # 这里只配置了main分支，所以只有推送main分支才会触发以下任务
jobs:
  # 任务ID
  build-and-deploy:
    # 运行环境
    runs-on: ubuntu-latest
    # 步骤
    steps:
      # 官方action，将代码拉取到虚拟机
      - name: Checkout  ️ 
        uses: actions/checkout@v3

      - name: Install and Build   # 安装依赖、打包，如果提前已打包好无需这一步
        run: |
          npm install
          npm run build
      - name: Copy to root   # 将打包好的文件复制到docs目录，这里是为了方便部署，如果不需要可以删除
        run: |
          cp -r .vuepress/dist/* docs/1

      - name: Deploy   # 部署到gh-pages分支
        uses:
          peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.ACCESS_TOKEN }}
          publish_dir: ./docs/1
```

这里用到了github token，在[Personal Access Tokens (Classic) (github.com)](https://github.com/settings/tokens)这里生成，点击Generate new token，勾选上这些选项就可以点击生成了，这个token只会给你展示一次，复制下来自己存好。

![](https://raw.githubusercontent.com/gaopengbin/PicRepo/main/20230308161557.png)

再回到项目的Setting中，把刚创建的token放进来，这里的Name和yml配置中github_token里面对应的。

![](https://raw.githubusercontent.com/gaopengbin/PicRepo/main/20230308161920.png)

## 开启gh-pages

![](https://raw.githubusercontent.com/gaopengbin/PicRepo/main/20230308162252.png)

把这里配置一下就可以了，刷新页面就会显示你的pages访问地址，这个gh-pages分支是在执行上面的workflow的最后一个步骤时创建并推送的，至此，就可以访问到部署的项目了。

## push一下试试

在本地push之后，就可以看到actions在执行了，包括每一步的执行情况，如果没有错误，执行成功后就是绿色的对钩，再去访问一下部署的页面就可以看到更新后的网页了。

![](https://raw.githubusercontent.com/gaopengbin/PicRepo/main/20230308163230.png)

[laogao (gaopengbin.github.io)](https://gaopengbin.github.io/blog/)