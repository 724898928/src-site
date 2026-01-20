//import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import HomeView from "@/views/HomeView.vue";
import CategoryView from "@/views/CategoryView.vue";
import ResourceDetailView from "@/views/ResourceDetailView.vue";
import SearchView from "@/views/SearchView.vue";
// 导入Element Plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/', component: HomeView },
      { path: '/category/:categoryId', component: CategoryView, props: true },
      { path: '/resource/:resourceId', component: ResourceDetailView, props: true },
      { path: '/search', component: SearchView, props: (route) => ({ query: route.query.q }) }
  ],
})


const app = createApp(App)

// 注册Element Plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


const pinia = createPinia()
app.use(router)
app.use(pinia)
app.use(ElementPlus,{locale: zhCn})
app.mount('#app')
