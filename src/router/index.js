import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout'
import home from '@/views/home'
import addUser from '@/views/addUser'
import userList from '@/views/userList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      redirect:'/home',
      children:[
        {
          path: 'home',
          component: home,
        },
        {
          path: 'addUser',
          component: addUser,
        },
        {
          path: 'userList',
          component: userList,
        },

      ]
    }
  ]
})
