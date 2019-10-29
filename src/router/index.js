import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import index from '../components/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/login', component: login },
  { path: '/index', component: index }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path === '/login' || token) {
    next()
  } else {
    next('/login')
  }
})

export default router
