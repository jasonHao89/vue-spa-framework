import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/', component: require('./views/index.vue') },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')

