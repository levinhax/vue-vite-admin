import { markRaw } from 'vue'
import { RouteRecordRaw } from 'vue-router'
// import RouterTransition from '/@/components/routerTransition/index.vue'
import BlankLayout from '../../layout/blankLayout'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/dashboard/workbench',
    // component: markRaw(RouterTransition),
    // component: BlankLayout,
    component: markRaw(BlankLayout),
    meta: {
      title: 'dashboard',
      icon: '',
    },
    children: [
      {
        path: 'workbench',
        name: 'dashboard-workbench',
        component: () => import('../../views/Dashboard/workbench/index'),
        meta: {
          title: 'dashboard-workbench',
          icon: '',
        },
      },
      {
        path: 'workbench-todo',
        name: 'dashboard-workbench-todo',
        component: () => import('../../views/Dashboard/workbench/todo'),
        meta: {
          title: 'dashboard-workbench-todo',
          icon: '',
        },
      },
      {
        path: 'analysis',
        name: 'dashboard-analysis',
        component: () => import('../../views/Dashboard/analysis'),
        meta: {
          title: 'dashboard-analysis',
          icon: '',
        },
      },
    ],
  },
]

export default routes
