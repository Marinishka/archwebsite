<template>
  <div class="in-container privacy-policy">
    <h1 class="privacy-policy__title">{{$t('privacy-policy.title')}}</h1>
      <p class="privacy-policy__text">{{$t('privacy-policy.text')}}</p>
    <section class="privacy-policy__section">
      <h2 class="privacy-policy__section-title">{{$t('privacy-policy.first.title')}}</h2>
      <p class="privacy-policy__text">{{$t('privacy-policy.first.text')}}</p>
    </section>
    <section class="privacy-policy__section">
      <h2 class="privacy-policy__section-title">{{$t('privacy-policy.second.title')}}</h2>
      <p class="privacy-policy__text">{{$t('privacy-policy.second.text')}}</p>
    </section>
    <section class="privacy-policy__section">
      <h2 class="privacy-policy__section-title">{{$t('privacy-policy.third.title')}}</h2>
      <p class="privacy-policy__text">{{$t('privacy-policy.third.text')}}</p>
    </section>
    <section class="privacy-policy__section">
      <h2 class="privacy-policy__section-title">{{$t('privacy-policy.fourth.title')}}</h2>
      <p class="privacy-policy__text">
        {{$t('privacy-policy.fourth.text-before')}}
      </p>
        <ul class="privacy-policy__list">
          <li class="privacy-policy__item">{{$t('privacy-policy.fourth.list.first')}}</li>
          <li class="privacy-policy__item">{{$t('privacy-policy.fourth.list.second')}}</li>
          <li class="privacy-policy__item">{{$t('privacy-policy.fourth.list.third')}}</li>
          <li class="privacy-policy__item">{{$t('privacy-policy.fourth.list.fourth')}}</li>
        </ul>
        <p class="privacy-policy__text">
        {{$t('privacy-policy.fourth.text-after')}}</p>
    </section>
    <section class="privacy-policy__section">
      <h2 class="privacy-policy__section-title">{{$t('privacy-policy.fifth.title')}}</h2>
      <p class="privacy-policy__text">{{$t('privacy-policy.fifth.text')}}</p>
    </section>
    <section class="privacy-policy__section">
      <h2 class="privacy-policy__section-title">{{$t('privacy-policy.sixth.title')}}</h2>
      <p class="privacy-policy__text">{{$t('privacy-policy.sixth.text')}}</p>
    </section>
    <section class="privacy-policy__section">
      <h2 class="privacy-policy__section-title">{{$t('privacy-policy.seventh.title')}}</h2>
      <p class="privacy-policy__text">{{$t('privacy-policy.seventh.text')}}</p>
    </section>
    <section class="privacy-policy__section">
      <h2 class="privacy-policy__section-title">{{$t('privacy-policy.eighth.title')}}</h2>
      <p class="privacy-policy__text">{{$t('privacy-policy.eighth.text')}}</p>
    </section>
    <section class="privacy-policy__section">
      <h2 class="privacy-policy__section-title">{{$t('privacy-policy.ninth.title')}}</h2>
      <p class="privacy-policy__text">{{$t('privacy-policy.ninth.text')}}</p>
      <p class="terms-of-use__text"><a href="mailto:Info@ar-chiteque.com">Info@ar-chiteque.com</a></p>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["privacy-policy"];
  },
  updated() {
    document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["privacy-policy"];
  }
}
</script>

<style lang="scss">

.privacy-policy {
  padding-bottom: 140px;
}
.privacy-policy__title {
  @extend .support-title-charter;
}

.privacy-policy__section-title {
  @extend .support-title-section;
}

.privacy-policy__text {
  @extend .support-text;
}

.privacy-policy__list {
  padding: 0;

  list-style-type: none;
  font-size: 18px;
  line-height: 1.5;

@extend .font-main;

  @media (min-width: $tablet-width) {
    padding-left: 27px;
  }
}

.privacy-policy__item::before {
  content: "";

  display: inline-block;
  width: 5px;
  height: 5px;
  margin-right: 8px;
  margin-bottom: 3px;

  background-color: $secondary-dark;
  border-radius: 50%;
}

</style>