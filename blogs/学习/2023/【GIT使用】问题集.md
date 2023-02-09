---
title: 【GIT使用】问题集
date: 2023/02/09
tags:
 - GIT
categories:
 - 学习
---



# 【GIT使用】问题集

1. 拉取代码vscode提示错误

```
fatal: unable to access 'https://github.com/gaopengbin/blog.git/': OpenSSL SSL_read: Connection was reset, errno 10054
```

产生原因：一般是这是因为服务器的SSL证书没有经过第三方机构的签署，所以才报错，

参考网上解决办法：解除ssl验证后，再次git即可

```
git config --global http.sslVerify false
```

