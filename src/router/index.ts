import Content from '@/views/Content.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    redirect: {
      name: 'home',
    },
  },
  { path: '/home', name: 'home', component: Content },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
