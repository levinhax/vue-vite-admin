import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import shared from './modules/shared'
import common from './common'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    meta: {
      title: '首页',
    },
    component: () => import('../layout/index.vue'),
    children: [
      // 基础路由 不用权限 home about ...common
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
        },
        component: () => import('../views/Home'),
      },
      {
        path: '/about',
        name: 'About',
        meta: {
          title: '关于',
        },
        component: () => import('../views/About'),
      },
      ...common,
    ],
  },
  ...shared,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // hash模式 createWebHashHistory()
  routes,
})

export default router
