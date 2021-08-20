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
import { Languages } from './const'

Vue.use(VueI18n);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);
Vue.use(ModalPlugin);
Vue.config.productionTip = false

const getLang = () => {
  let lang = "";

  if (navigator.languages && navigator.languages.length) {
    lang = navigator.languages[0];
  } else if (navigator.userLanguage) {
    lang = navigator.userLanguage;
  } else {
    lang = navigator.language;
  }
    lang = lang[0] + lang[1];
  if (!Object.prototype.hasOwnProperty.call(Languages, lang)) {
    lang = "en";
  }

  return lang;
}

const i18n = new VueI18n({
  locale: getLang(),
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
