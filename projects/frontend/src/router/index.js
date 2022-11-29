import { createRouter, createWebHistory } from 'vue-router'
import middleware from "@grafikri/vue-middleware"
import auth from './middleware/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        middleware: [auth.authenticaded]
      },
      component: () =>import('@/views/scan.vue'),
    },
    {
      path: '/scan',
      name: 'Scan',
      meta: {
        middleware: [auth.authenticaded]
      },
      component: () => import('@/views/scan.vue'),
    },
    {
      path: '/ticket',
      name: 'Ticket',
      meta: {
        //middleware: [auth.authenticaded]
      },
      component: () =>import('@/views/ticket.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        middleware: [auth.redirectIfAuthenticated],
      },
      component: () => import('../views/login.vue')
    },
    {
      path: '/logout',
      name: 'Logout',
      component: () => import('../views/logout.vue')
    },
    { 
      path: "/:NotFound(.*)*",
      //path: "/:catchAll(.*)",
      //path: '/:pathMatch(.*)',
      name: "NotFound",
      redirect: "/404"
      
    },

    { 
      path: "/404",
      nam: "E404",
      component: () => import('../views/errors/E404.vue')
    },
  ]
})

router.beforeEach(middleware())

export default router
