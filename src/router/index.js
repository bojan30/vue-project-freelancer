import Vue from 'vue'
import VueRouter from 'vue-router'
import Project from '../views/Project.vue'
import Headers from '../views/Headers.vue'
import Export from '../views/Export.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Project',
    component: Project
  },
  {
    path: '/headers',
    name: 'Headers',
    component: Headers
  },
  {
    path: '/export',
    name: 'Export',
    component: Export
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
