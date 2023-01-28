import { createRouter, createWebHistory } from 'vue-router'
import type { LocationQuery } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import { getObjectWithNotEmptyValues } from '@/utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/favorites',
      component: () => import('@/pages/FavoritesPage.vue')
    }
  ]
})

export const updateRouteQuery = (query: LocationQuery) =>
  router.push({ query: getObjectWithNotEmptyValues(query) })

export default router
