export const data = JSON.parse("{\"key\":\"v-9b0a4a18\",\"path\":\"/blogs/%E5%AD%A6%E4%B9%A0/test.html\",\"title\":\"ttttttt\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"ttttttt\",\"date\":\"2016/12/15\",\"tags\":[\"tag3\"],\"categories\":[\"aa\"]},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"blogs/学习/test.md\"}")

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
