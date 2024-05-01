import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../pages/NotFound/index.vue';
import HomePage from '../pages/Home/index.vue';
import ContactPage from '../pages/Contact/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/contact',
      component: ContactPage
    },
    { path: '/:pathMatch(.*)*', name: 'not found', component: NotFound }
  ]
})

export default router
