import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import HomeView from "@/views/HomeView.vue";
import CategoryView from "@/views/CategoryView.vue";
import ResourceDetailView from "@/views/ResourceDetailView.vue";
import SearchView from "@/views/SearchView.vue";

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
const pinia = createPinia()
app.use(router)
app.use(pinia)

app.mount('#app')
