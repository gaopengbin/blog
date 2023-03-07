export const themeData = JSON.parse("{\"vuePreviewsDir\":\"./.vuepress/vue-previews\",\"commentConfig\":{\"type\":\"valine\",\"options\":{\"appId\":\"zk97Tcec4bECHsYazJYSoFzc-gzGzoHsz\",\"appKey\":\"xC2JZM44yVjjKCng3fAUtyTz\",\"hideComments\":false}},\"style\":\"@vuepress-reco/style-default\",\"logo\":\"/logo.png\",\"author\":\"laogao\",\"authorAvatar\":\"/avatar.png\",\"docsRepo\":\"https://github.com/vuepress-reco/vuepress-theme-reco-next\",\"docsBranch\":\"main\",\"docsDir\":\"example\",\"lastUpdatedText\":\"\",\"series\":{\"/docs/theme-reco/\":[{\"text\":\"module one\",\"children\":[\"home\",\"theme\"]},{\"text\":\"module two\",\"children\":[\"api\",\"plugin\"]}]},\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"目录\",\"link\":\"/categories/reco/1/\"},{\"text\":\"标签\",\"link\":\"/tags/tag1/1/\"},{\"text\":\"其他\",\"children\":[{\"text\":\"写一篇\",\"link\":\"/tools/write\"},{\"text\":\"vuepress-theme-reco\",\"link\":\"/blogs/other/guide\"}]}],\"bulletin\":{\"body\":[{\"type\":\"text\",\"content\":\"哈哈哈哈哈哈我是老高\",\"style\":\"font-size: 12px;\"},{\"type\":\"hr\"}]}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
