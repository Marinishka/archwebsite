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
import Home from '../views/Home-page.vue'
import Pricing from '../views/Pricing.vue'
import Toolkit from '../views/Toolkit.vue'
import Account from '../views/Account.vue'
import PrivacyPolicy from '../views/Privacy-policy'
import TermsOfUse from '../views/Terms-of-use.vue'
import NotFound from '../views/Not-found.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/pricing',
  name: 'Pricing',
  component: Pricing
}, {
  path: '/toolkit',
  name: 'Toolkit',
  component: Toolkit
}, {
  path: '/login',
  name: 'Login',
  component: Login,
}, {
    path: '/logout',
    name: 'Logout',
    beforeEnter: function(to, from, next) {
      store.commit("logout");
      next("/login");
    },
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
  }, {
    path: '/account',
    name: 'Account',
    component: Account,
    children: [
      {
          path: 'profile',
          name: 'Profile',
          component: Profile,
          meta: {
            requiresAuth: true
          }
        }, {
            path: 'checkout/status',
            name: 'CheckoutStatus',
            component: CheckoutStatus,
            meta: {
              requiresAuth: true
            }
          }, {
            path: 'subscriptions',
            name: 'Subscriptions',
            component: Subscriptions,
            meta: {
              requiresAuth: true
            }
          }, {
            path: 'billing-history',
            name: 'Billing',
            component: Billing,
            meta: {
              requiresAuth: true
            }
          }
    ]
  }, {
    path: '/privacy-policy',
    name: 'Privacy policy',
    component: PrivacyPolicy
  }, {
    path: '/terms-of-use',
    name: 'Terms of use',
    component: TermsOfUse
  }, {
    path: '*',
    name: 'Not Found',
    component: NotFound
  }
  
]

const router = new VueRouter({
  //mode: 'history',
  //base: "/portal/",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
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