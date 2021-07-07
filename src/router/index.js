import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/pages/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/pages/Contact.vue')
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('../components/pages/Faq.vue')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../components/pages/Team.vue')
  },
  {
    path: '/zones',
    name: 'Zones',
    component: () => import('../components/pages/Zones.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../components/pages/Projects.vue')
  },
  {
    path: '/aaraDemo',
    name: 'aaraDemo',
    component: () => import('../components/pages/aaraDemo.vue')
  },
  {
    path: "/pranali",
        name: "Pranali",
        beforeEnter: () => {
            window.location.href = 'https://rotaract3142.org/desk';
        }
  },
  {
    path: "/blog",
        name: "Blog",
        beforeEnter: () => {
            window.location.href = 'https://rotaract3142.org/blog';
        }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
