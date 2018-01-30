import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Listmenu from '@/components/Home/Listmenu'
import Banner from '@/components/Home/Banner'
import Category from '@/components/Category/Category'
import Ranking from '@/components/Ranking/Ranking'
import Listcontext from '@/components/Home/Listcontext'
import Cartoon from '@/components/Cartoon/Cartoon'
import CarDel from '@/components/Cartoon/CarDel'
import CarBar from '@/components/Cartoon/CarBar'
import CatList from '@/components/Cartoon/CatList'
import CarItem from '@/components/Cartoon/CarItem'
import Other from '@/components/Other/Other'
import Login from '@/components/Login/Login'
import LoginSuccess from '@/components/Login/LoginSuccess'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/Listmenu',
          name: 'Listmenu',
          component: Listmenu
        },
        {
          path: '/Banner',
          name: 'Banner',
          component: Banner
        },
        {
          path: '/Listcontext',
          name: 'Listcontext',
          component: Listcontext
        }
      ]
    },
    {
      path: '/CarItem',
      name: 'CarItem',
      component: CarItem
    },
    {
      path: '/LoginSuccess',
      name: 'LoginSuccess',
      component: LoginSuccess,
      beforeEnter: (to, from, next) => {
        if (to.path == '/Login') {
          sessionStorage.removeItem('user')
          sessionStorage.removeItem('pwd')
        }
        if (sessionStorage.getItem('user')) {
          next()
        } else {
          next({path: '/Login'})
        }
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Other',
      name: 'Other',
      component: Other
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category
    },
    {
      path: '/Ranking',
      name: 'Ranking',
      component: Ranking,
      beforeEnter: (to, from, next) => {
        if (to.path == '/Login') {
          sessionStorage.removeItem('user')
          sessionStorage.removeItem('pwd')
        }
        if (sessionStorage.getItem('user')) {
          next()
        } else {
          console.log(this)
          alert('需要先登录')
          next({path: '/Login'})
        }
      }
    },
    {
      path: '/Cartoon',
      name: 'Cartoon',
      redirect: '/Cartoon/CarDel',
      component: Cartoon,
      children: [
        {
          path: '/Cartoon/CarDel',
          name: 'CarDel',
          component: CarDel
        },
        {
          path: '/Cartoon/CarBar',
          name: 'CarBar',
          component: CarBar
        },
        {
          path: '/Cartoon/CatList',
          name: 'CatList',
          component: CatList
        }
      ]
    }
  ]
})
