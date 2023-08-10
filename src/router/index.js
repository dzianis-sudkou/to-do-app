import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/tasks',
      component: () => import('../views/TasksView.vue')
    },
    {
      path: '/archive',
      component: () => import('../views/ArchiveView.vue')
    }
  ]
})
