import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path:'/home',
    redirect:{
      name:'Home'
    },
   
  },
  {
    path: '/details',
    name: 'Details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '@/views/details/Details.vue')
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import( '@/views/movie/Movie.vue')
  },
  {
    path: '/live',
    name: 'live',
    component: () => import( '@/views/live/Live.vue')
  },
  {
    path: '/favor',
    name: 'favor',
    component: () => import( '@/views/favor/Favor.vue')
  },
  {
    path: '/recently',
    name: 'recently',
    component: () => import( '@/views/recently/Recently.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
