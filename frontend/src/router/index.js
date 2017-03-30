import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/hello/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
