<template>
  <DefaultLayout></DefaultLayout>
</template>

<script>

import DefaultLayout from './layouts/default.vue'

export default {
  components: {
    DefaultLayout
  },
  watch: {
  '$store.lang': {
    immediate: true,
    handler() {
      document.documentElement.setAttribute('lang', this.$root.$i18n.locale);
    },
  },
}
}
</script>
<style lang="scss">
@import "./assets/scss/normalize.scss";
@import "./assets/scss/fonts.scss";
@import "./assets/scss/bootstrap.custom.scss";
@import "./assets/scss/styles.scss";

</style> 