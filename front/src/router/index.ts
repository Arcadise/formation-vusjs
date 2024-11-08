import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {stockRoute} from "@/stock/stock.route";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/legal',
      name: 'legal',
      component: () => import('../views/LegalView.vue'),
    },
    stockRoute
  ],
})

export default router
