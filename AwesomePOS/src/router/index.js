import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/page/HelloWorld'
import Pos from '@/components/page/Pos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pos',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/',
      name:'pos',
      component:Pos
    }
  ]
})
