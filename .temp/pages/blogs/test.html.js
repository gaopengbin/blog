export const data = JSON.parse("{\"key\":\"v-7e35cbf0\",\"path\":\"/blogs/test.html\",\"title\":\"����\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"����\",\"date\":\"2016/12/15\",\"tags\":[\"tag3\"],\"categories\":[\"ѧϰ\"]},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"blogs/test.md\"}")

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
