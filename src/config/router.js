export default function (VueRouter) {
  const routes = [
    { path: '/', component: require('views/index.vue') },
    { path: '/foo', component: require('views/foo.vue') }
  ]
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  router.beforeEach((to, from, next) => {
    console.warn('beforeEach')
    next()
  })
  router.afterEach(route => {
    console.warn('afterEach')
  })
  return router
}
