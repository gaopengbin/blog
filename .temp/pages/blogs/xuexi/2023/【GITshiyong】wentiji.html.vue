<template><div><h1 id="【git使用】问题集" tabindex="-1"><a class="header-anchor" href="#【git使用】问题集" aria-hidden="true">#</a> 【GIT使用】问题集</h1>
<ol>
<li>拉取代码vscode提示错误</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>fatal: unable to access 'https://github.com/gaopengbin/blog.git/': OpenSSL SSL_read: Connection was reset, errno 10054
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>产生原因：一般是这是因为服务器的SSL证书没有经过第三方机构的签署，所以才报错，</p>
<p>参考网上解决办法：解除ssl验证后，再次git即可</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git config --global http.sslVerify false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


