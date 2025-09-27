import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Modal from '../components/modal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal,
    },
  ],
})

export default router
