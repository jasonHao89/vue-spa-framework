import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './config/router'
import Resource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(Resource)
const router = Router(VueRouter)
new Vue({
  router
}).$mount('#app')

