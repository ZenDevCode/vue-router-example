import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User'
import Footer from './components/Footer'
import UserFooter from './components/UserFooter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        footer: Footer,
      }
    },
    {
      path: '/users/:id',
      name: 'user',
      components: {
        default: User,
        footer: UserFooter
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        footer: Footer
      }
    }
  ]
})
