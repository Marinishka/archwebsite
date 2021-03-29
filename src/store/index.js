import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    login(state, token) {
      state.isLoggedIn = true;
      state.token = token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
  plugins: [vuexLocal.plugin]
})
export default store