import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/home/index.vue'
import ContactPage from '../pages/contact/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
  ]
})

export default router
