<template>
  <b-container class="container not-found">
    <h1 class="not-found__title">{{$t('404.title')}}</h1>
    <p class="not-found__text">{{$t('404.text')}}</p>
  </b-container>
</template>

<script>
export default {
    created() {
      document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["not-found"];
    },
    updated() {
      document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["not-found"];
    }
}
</script>

<style lang="scss">

.not-found {
  padding-bottom: 140px;
}
.not-found__title {
  @extend .title-chapter;
}

.not-found__text {
  text-align: justify;
  text-indent: 1.5em;

@extend .text;
}

</style>