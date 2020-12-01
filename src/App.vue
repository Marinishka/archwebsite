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
  @import './assets/scss/bootstrap.custom.scss';
  @import './assets/scss/styles.scss';
</style> 