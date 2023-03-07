import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("test", defineAsyncComponent(() => import("E:/ZMyProject/laogaoBlog/.vuepress/vue-previews/test.vue"))),
      app.component("write", defineAsyncComponent(() => import("E:/ZMyProject/laogaoBlog/.vuepress/vue-previews/write.vue")))
  },
}
