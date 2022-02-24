import { createRouter, createWebHistory, RouteRecordRaw, } from 'vue-router'
import layout from '@/layout/index.vue'
import errorRouter from './errorRouter'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/table',
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/table',
        name: 'Table',
        component: () => import('@/views/table/index.vue')
      },

      {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/test/index.vue')
      }
    ]
  },
  ...errorRouter,
  { path: '/:pathMatch(.*)*', redirect: '/404' },
]


const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({
    left: 0,
    top: 0,
  }),
  routes: routes,
})

export default router