<template>
  <div class="in-container">
    <section class="promo">
      <h2 class="promo__title" v-html="$t('promo.title')"></h2>
      <ul class="promo__list promo-list">
        <li class="promo-list__item">{{$t('promo.list.first')}}</li>
        <li class="promo-list__item">{{$t('promo.list.second')}}</li>
        <li class="promo-list__item">{{$t('promo.list.third')}}</li>
      </ul>
      <img class="promo__img" src="./../assets/Freedom-lady.png" width="648" height="648" v-bind:alt="$t('promo.alt-img')">
      <div class="promo__btn-container">
        <a href="https://apps.apple.com/app/id1447699048" class="promo__btn--ios promo__btn">{{$t('link-to-app-store')}}</a>
        <a href="https://play.google.com/store/apps/details?id=com.architeque.android.app" class="promo__btn--android promo__btn">{{$t('link-to-google-play')}}</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Promo',
};
</script>;

<style lang="scss">

.promo {
  position: relative;

  margin-bottom: 130px;
}

.promo__title {
  max-width: 600px;
  margin-bottom: 20px !important;
  padding-right: 40px;

  font-size: 30px !important;
  line-height: 1.3 !important;

@extend .font-title;

  @media (min-width: $tablet-width) {
    min-width: 728px;
    max-width: none;
    margin-bottom: 70px !important;
    padding-right: 320px;

    font-size: 64px !important;
  }
}

.promo__btn-container {
  display: grid;

  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(auto, 135px));
}

.promo__btn {
  position: relative;

  display: inline-block;
  width: 135px;
  min-height: 50px;
  padding-top: 14px;
  padding-right: 10px;
  padding-bottom: 15px;
  padding-left: 45px;

  font-size: 12px;
  line-height: 1.5;
  text-align: left;

  border: 2px solid $bg-dark;
  border-radius: 8px;
  cursor: pointer;

@extend .font-link-btn-1;

  @media (min-width: $tablet-width) {
    display: inline-block;
    width: 221px;
    min-height: 67px;
    padding-top: 17px;
    padding-right: 19px;
    padding-bottom: 16px;

    font-size: 18px;
  }
}

.promo__btn::before {
  content: "";
  position: absolute;
  top: 12px;
  left: 15px;

  display: inline-block;
  width: 20px;
  height: 20px;

  @media (min-width: $tablet-width) {
    top: 16px;
    left: 19px;

    width: 28px;
    height: 28px;
  }
}

.promo__btn--ios {
  color: $white !important;

  background-color: $bg-dark !important;

  @media (min-width: $tablet-width) {
    padding-left: 70px;
  }
}

.promo__btn--android {
  color: $bg-dark !important;
  @media (min-width: $tablet-width) {
    padding-left: 65px;
  }
}

.promo__btn--ios::before {
  background-image: url("./../assets/icon-app-store.svg");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  @media (min-width: $tablet-width) {
    background-size: 28px 28px;
  }
}

.promo__btn--android::before {
  background-image: url("./../assets/icon-playstore.svg");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  @media (min-width: $tablet-width) {
    background-size: 28px 28px;
  }
}

.promo-list {
  margin-bottom: 40px !important;
  padding: 0;

  list-style-type: none;
  @media (min-width: $tablet-width) {
    margin-bottom: 70px !important;
  }
}

.promo-list__item {
  display: block;

  font-size: 14px;
  line-height: 1.2;

@extend .font-title;

  @media (min-width: $tablet-width) {
    font-size: 18px;
  }
}

.promo-list__item:not(:last-child) {
  margin-bottom: 10px;
  @media (min-width: $tablet-width) {
    margin-bottom: 20px;
  }
}

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

.promo__img {
  display: none;
  @media (min-width: $tablet-width) {
    position: absolute;
    right: 0;
    bottom: -130px;

    display: inline-block;
  }
}

</style>