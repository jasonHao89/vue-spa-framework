import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './config/router'
import Resource from 'vue-resource'
import 'jquery' // assets/jquery.js
import 'jquery-validation'
import './assets/additional-methods.js'
/* $ 已全局化, 因为eslint规范变量必须先声明在使用，所以请使用window.$
* 建议写法:
* var $ = window.$
* .........
*/
console.warn(window.$().validate)
Vue.use(VueRouter)
Vue.use(Resource)
const router = Router(VueRouter)
new Vue({
  router
}).$mount('#app')

