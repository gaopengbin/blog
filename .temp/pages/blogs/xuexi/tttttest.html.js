export const data = JSON.parse("{\"key\":\"v-221f7f74\",\"path\":\"/blogs/xuexi/tttttest.html\",\"title\":\"testtest\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"testtest\",\"date\":\"2016/12/15\",\"tags\":[\"TEST![地球.jpg](http://localhost:7878/test/地球.jpg)\"],\"categories\":[\"学习\"]},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"blogs/学习/tttttest.md\"}")

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
