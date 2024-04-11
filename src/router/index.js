import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/views/Home/index.vue')
    },
    {
      path: '/order',
      component: () => import('@/views/Order/index.vue')
    },
    {
      path: '/message',
      component: () => import('@/views/Message/index.vue'),
    },
    {
      path: '/my',
      component: () => import('@/views/My/index.vue'),
      meta: {
        hiderTabbar: true
      }
    },
    {
      path: '/city',
      component: () => import('@/views/City/index.vue'),
      meta: {
        hiderTabbar: true
      }
    },
    {
      path: '/search',
      component: () => import('@/views/Search/index.vue'),
      meta: {
        hiderTabbar: true
      }
    },
    {
      path: '/details/:id', // 动态路由传参
      component: () => import('@/views/Detail/index.vue')
    }
  ]
})

export default router