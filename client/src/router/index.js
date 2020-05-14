import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/HeroesWorkOut',
    name: 'HeroesWorkOut',

    component: () => import('../views/HeroesWorkOut.vue')
  },
  {
    path: '/PersonalWorkOut',
    name: 'PersonalWorkOut',
    // route level code-splitting
    // this generates a separate chunk (Login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "Login" */ '../views/PersonalWorkOut.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router