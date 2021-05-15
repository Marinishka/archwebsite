import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import en from './lang/en.json'
import ru from './lang/ru.json'
import {
  BootstrapVue,
  IconsPlugin,
  ModalPlugin
} from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
Vue.use(ModalPlugin);
Vue.config.productionTip = false

//const i18n = new VueI18n({
//  locale: "ru"
//});
const i18n = new VueI18n({
  locale: location.href.search("/ru") >= 0 ? 'ru' : 'en',
  messages: {
    en, 
    ru
  }
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')