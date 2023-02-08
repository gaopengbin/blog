import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "laogao",
  description: "Just playing around",
  base: `/test/`,
  port: 8888,
  theme: recoTheme({
    commentConfig: {
      type: 'valine',
      options: {
        appId: 'zk97Tcec4bECHsYazJYSoFzc-gzGzoHsz', // your appId
        appKey: 'xC2JZM44yVjjKCng3fAUtyTz', // your appKey
        hideComments: false, // 全局隐藏评论，默认 false
      },
    },
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "laogao",
    authorAvatar: "/avatar.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "主页", link: "/" },
      { text: "目录", link: "/categories/reco/1/" },
      { text: "标签", link: "/tags/tag1/1/" },
      {
        text: "其他",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
        ],
      },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `哈哈哈哈哈哈我是老高`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        // {
        //   type: "title",
        //   content: "QQ 群",
        // },
        // {
        //   type: "text",
        //   content: `
        //   <ul>
        //     <li>QQ群1：1037296104</li>
        //     <li>QQ群2：1061561395</li>
        //     <li>QQ群3：962687802</li>
        //   </ul>`,
        //   style: "font-size: 12px;",
        // },
        // {
        //   type: "hr",
        // },
        // {
        //   type: "title",
        //   content: "GitHub",
        // },
        // {
        //   type: "text",
        //   content: `
        //   <ul>
        //     <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
        //     <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
        //   </ul>`,
        //   style: "font-size: 12px;",
        // },
        // {
        //   type: "hr",
        // },
        // {
        //   type: "buttongroup",
        //   children: [
        //     {
        //       text: "打赏",
        //       link: "/docs/others/donate.html",
        //     },
        //   ],
        // },
      ],
    },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});
