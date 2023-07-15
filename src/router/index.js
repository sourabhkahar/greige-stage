import { createRouter, createWebHistory } from 'vue-router'
// import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
// import PostView from '@/views/dashboard/post/PostView.vue'

const routes = [
  {
    path:'/',
    name: 'UserSideLayout',
    component: () => import('@/layouts/UserSideLayouts.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/furnishing',
        name: 'furnishing',
        component: ProductsView
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactView
      },
    ]
  },
//   {
//     // not found page
//     path: '/:pathMatch(.*)*',
//     name: 'NotFound',
//     component: () => import('@/views/error/NotFound.vue')
//   },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router