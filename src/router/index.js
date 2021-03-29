import Vue from 'vue'
import VueRouter from 'vue-router'

//import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ResetPassword from '../views/ResetPassword.vue'
import Profile from '../views/Profile.vue'
import Subscriptions from '../views/Subscriptions.vue'
import Billing from '../views/Billing.vue'
import CheckoutStatus from '../views/CheckoutStatus.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: 'blank',
    }
  }, {
    path: '/logout',
    name: 'Logout',
    beforeEnter: function(to, from, next) {
      store.commit("logout");
      next("/login");
    },
    meta: {
      layout: 'blank',
    }
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      layout: 'blank',
    }
  }, {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: {
      layout: 'blank',
    }
  },
  /* {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      layout: 'default',
      requiresAuth: true
    }
  },*/
  {
    path: '/checkout/status',
    name: 'CheckoutStatus',
    component: CheckoutStatus,
    meta: {
      layout: 'default',
      requiresAuth: true
    }
  }, {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: Subscriptions,
    meta: {
      layout: 'default',
      requiresAuth: true
    }
  }, {
    path: '/billing-history',
    name: 'Billing',
    component: Billing,
    meta: {
      layout: 'default',
      requiresAuth: true
    }
  }, {
    path: '/',
    name: 'Profile',
    component: Profile,
    meta: {
      layout: 'default',
      requiresAuth: true
    }
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import ( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  //mode: 'history',
  //base: "/portal/",
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.isLoggedIn || store.state.token == "") {
      next({
        name: 'Login'
      })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router