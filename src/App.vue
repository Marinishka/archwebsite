<template>
  <default-layout v-if="$route.meta.layout == 'default'"></default-layout>
  <blank-layout v-else-if="$route.meta.layout == 'blank'"></blank-layout>
  <default-layout v-else></default-layout>
</template>

<script>

import DefaultLayout from './layouts/default.vue'
import BlankLayout from './layouts/blank.vue'

export default {
  components: {
    DefaultLayout,
    BlankLayout
  },
}
</script>
<style lang="scss">
  // Import custom SASS variable overrides, or alternatively
  // define your variable overrides here instead
  @import './assets/scss/bootstrap.custom.scss';


  // Import Bootstrap and BootstrapVue source SCSS files
  @import 'bootstrap/scss/bootstrap.scss';
  @import 'bootstrap-vue/src/index.scss';  
  @import './assets/scss/styles.scss';
</style> 