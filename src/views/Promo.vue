<template>
  <b-container class="mw-1180">
    <section class="promo">
      <h2 class="promo__title" v-html="$t('promo.title')"></h2>
      <ul class="promo__list promo-list">
        <li class="promo-list__item">{{$t('promo.list.first')}}</li>
        <li class="promo-list__item">{{$t('promo.list.second')}}</li>
        <li class="promo-list__item">{{$t('promo.list.third')}}</li>
      </ul>
      <img class="promo__img" src="./../assets/Freedom-lady.png" width="648" height="648" v-bind:alt="$t('promo.alt-img')">
      <a href="https://apps.apple.com/app/id1447699048" class="promo__btn--ios promo__btn">{{$t('link-to-app-store')}}</a>
      <a href="https://play.google.com/store/apps/details?id=com.architeque.android.app" class="promo__btn--android promo__btn">{{$t('link-to-google-play')}}</a>
    </section>
  </b-container>
</template>

<script>
export default {
  name: 'Promo',
};
</script>;

<style lang="scss">

.promo-list__item::before {
  content: "";

  display: inline-block;
  width: 5px;
  height: 5px;
  margin-right: 8px;

  line-height: 18px;

  background-color: $secondary-dark;
  border-radius: 50%;
}

.promo__btn {
  position: relative;

  display: inline-block;
  width: 221px;
  min-height: 67px;
  padding-top: 16px;
  padding-right: 19px;
  padding-bottom: 16px;

  font-size: 18px;
  line-height: 28px;
  font-family: $font-WorkSans;
  text-align: left;

  border: 2px solid $bg-dark;
  border-radius: 8px;
  cursor: pointer;
}

.promo__btn::before {
  content: "";
  position: absolute;
  top: 16px;
  left: 19px;

  display: inline-block;
  width: 28px;
  height: 28px;
}

.promo__btn--ios {
  margin-right: 20px;
  padding-left: 70px;

  color: $white !important;

  background-color: $bg-dark !important;
}

.promo__btn--android {
  padding-left: 65px;

  color: $bg-dark !important;
}

.promo {
  position: relative;

  margin-bottom: 130px;
}

.promo__title {
  min-width: 780px;
  margin-bottom: 70px !important;
  padding-right: 320px;

  font-weight: bold !important;
  font-size: 64px !important;
  line-height: 78px !important;
  font-family: $font-ProximaNovaBold;
}

.promo__btn--ios::before {
  background-image: url("./../assets/icon-app-store.svg");
}

.promo__btn--android::before {
  background-image: url("./../assets/icon-playstore.svg");
}

.promo-list {
  margin-bottom: 70px !important;
  padding: 0;

  list-style-type: none;
}

.promo-list__item {
  display: block;

  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  font-family: $font-ProximaNovaBold;
}

.promo-list__item:not(:last-child) {
  margin-bottom: 20px;
}

.promo__img {
  position: absolute;
  right: 0;
  bottom: -130px;
}

</style>