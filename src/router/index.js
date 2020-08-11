import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// import Book from '../views/Book.vue'
// import Wpusers from '../views/Wpusers.vue'
import BookManage from '../views/BookManage'
import AddBook from '../views/AddBook'
import BookUpdate from '../views/BookUpdate'
// import PageThree from '../views/PageThree'
// import PageFour from '../views/PageFour'
import Index from '../Index'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  //   {
  //     path:'/about',
  //     component: About  //both can work
  //   },
  //   {
  //     path:'/book',
  //     component: Book
  //   },
  //   {
  //     path:'/wpusers',
  //     component: Wpusers
  //   },
    {
      path: "/",
      name: "图书管理",
      component:Index,
      show:true,
      redirect: "/BookManage",
      children:[
        {
          path: "/BookManage",
          name: "查询图书",
          component:BookManage
        },
        {
          path: "/AddBook",
          name: "添加图书",
          component:AddBook
        },


      ]
    },
    {
      path: "/Update",
      // name: "修改图书",
      component:BookUpdate,
      show:false
    }

    // {
    //   path: "/navigation",
    //   name: "导航2",
    //   component:Index,
    //   children:[
    //     {
    //       path: "/pageFour",
    //       name: "页面4",
    //       component:PageFour
    //     }
    //   ]
    // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }   //vue 3.0 new method 懒加载
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
