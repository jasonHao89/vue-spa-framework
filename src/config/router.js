export default function (VueRouter) {
  const routes = [
    { path: '/', component: require('views/index.vue') },
    {
      path: '/foo',
      component: require('views/foo.vue')
    },
    {
      path: '/ec',
      component: require('views/admin.vue'),
      children: [
        {
          path: '/',
          component: require('views/admin/user.vue')
        },
        {
          path: 'user',
          component: require('views/admin/user.vue')
        },
        {
          path: 'brand',
          component: require('views/admin/brand.vue')
        }
      ]
    },
    {
      path: '/mall',
      component: require('views/frame.vue'),
      children: [
        {
          path: '/',
          component: require('views/frame/product.vue')
        },
        {
          path: 'product',
          component: require('views/frame/product.vue')
        },
        {
          path: 'brand',
          component: require('views/frame/brand.vue')
        }
      ]
    }
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
