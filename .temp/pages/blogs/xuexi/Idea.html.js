export const data = JSON.parse("{\"key\":\"v-5e17b78f\",\"path\":\"/blogs/xuexi/Idea.html\",\"title\":\"Blog想法\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Blog想法\",\"date\":\"2023/02/10\",\"tags\":[\"tag1\"],\"categories\":[\"学习\"]},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"blogs/学习/Idea.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
