import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/Home/index.vue'
import ContactPage from '../pages/Contact/index.vue'

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
