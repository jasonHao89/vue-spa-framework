import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './config/router'
import Resource from 'vue-resource'
import store from './store/store'
import 'jquery' // assets/jquery.js
import './config/ajax'
import 'jquery-validation'
import './assets/additional-methods.js'

/* $ 已全局化, 因为eslint规范变量必须先声明在使用，所以请使用window.$
* 建议写法:
* var $ = window.$
* .........
*/

Vue.use(VueRouter)
Vue.use(Resource)
const router = Router(VueRouter, store)

new Vue({
  router,
  store
}).$mount('#app')
