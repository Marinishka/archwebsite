<template>
  <div class="in-container terms-of-use">
    <h1 class="terms-of-use__title">{{$t('terms-of-use.title')}}</h1>
    <p class="terms-of-use__text">{{$t('terms-of-use.text')}}</p>
    <section>
      <h2 class="terms-of-use__section-title">{{$t('terms-of-use.first.title')}}</h2>
      <p class="terms-of-use__text">{{$t('terms-of-use.first.text')}}</p>
    </section>
    <section>
      <h2 class="terms-of-use__section-title">{{$t('terms-of-use.second.title')}}</h2>
      <p class="terms-of-use__text">{{$t('terms-of-use.second.text')}}</p>
      <p class="terms-of-use__text"><a href="mailto:Info@ar-chiteque.com">Info@ar-chiteque.com</a></p>
    </section>
  </div>
</template>

<script>
export default {
    created() {
      document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["terms-of-use"];
    },
    updated() {
      document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["terms-of-use"];
    }
}
</script>

<style lang="scss">

.terms-of-use {
  padding-bottom: 140px;
}

.terms-of-use__title {
  @extend .support-title-charter;
}

.terms-of-use__section-title {
  @extend .support-title-section;
}

.terms-of-use__text {
  @extend .support-title-text;
}

</style>