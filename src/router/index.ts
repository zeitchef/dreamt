import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/jackpot',
      name: 'jackpot',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/JackpotPage.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('../views/PageNotFound.vue')
    }
  ]
})

export default router
