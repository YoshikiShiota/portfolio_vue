import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contents from '../views/Contents.vue'
import Contact from '../views/Contact.vue'
import Skills from '../views/Skills.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contents',
    name: 'contents',
    component: Contents
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
