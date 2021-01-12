import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // hash模式 createWebHashHistory()
  routes,
})

export default router
