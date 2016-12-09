export default function (VueRouter, store) {
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
    store.dispatch('SYNC_ALL')
    if(store.state.user.userId===undefined)
      console.warn('还没有登录或登录超时')
    else
      console.warn('登录成功')
      next()
  })
  router.afterEach(route => {
    console.warn('afterEach')
  })
  return router
}
