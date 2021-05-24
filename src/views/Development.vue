<template>
  <div class="development-bg">
    <div class="in-container development">
      <h2 class="development__title">{{$t('development.title')}}</h2>
      <ul class="development__list development-list">
        <li class="development-list__item development-item ">
          <div class="development-item__img">
            <img width="391px" height="442px" src="./../assets/Phones.png" v-bind:alt="$t('development.alt-img.phones')">
          </div>
          <div class="development-item__text development-item__text--app">
            <h3 class="development-item__title">{{$t('development.list.first.title')}}</h3>
            <ul class="development-item__features development-item-features">
              <li class="development-item-features__item">{{$t('development.list.first.features.first')}}</li>
              <li class="development-item-features__item">{{$t('development.list.first.features.second')}}</li>
              <li class="development-item-features__item">{{$t('development.list.first.features.third')}}</li>
            </ul>
            <b-link class="development__btn btn" v-bind:href="hrefApp">{{$t('btn-download')}}</b-link>
          </div>
        </li>
        <li class="development-list__item development-item">
          <div class="development-item__text development-item__text--tools">
            <h3 class="development-item__title">{{$t('development.list.second.title')}}</h3>
            <ul class="development-item__features development-item-features">
              <li class="development-item-features__item">{{$t('development.list.second.features.first')}}</li>
              <li class="development-item-features__item">{{$t('development.list.second.features.second')}}</li>
              <li class="development-item-features__item">{{$t('development.list.second.features.third')}}</li>
            </ul>
            <b-link :to="{name: 'Toolkit'}" class="development__btn btn">{{$t('btn-download')}}</b-link>
          </div>
          <div class="development-item__img">
            <img width="458" height="398" src="./../assets/windows.png" v-bind:alt="$t('development.alt-img.app')">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hrefApp: function() {
      let os = "";
  
       const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/android/i.test(userAgent)) {
        os = "Android";
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        os = "iOS";
      } else {
        os = "unknown";
      }
      
      if (os === "Android") {
        return "https://play.google.com/store/apps/details?id=com.architeque.android.app"; 
      } else {
        return "https://itunes.apple.com/app/apple-store/id1447699048";
      }
    }
  }
}
</script>

<style lang="scss">

.development {
  padding-top: 70px;
  padding-bottom: 75px;
}

.development-item {
  display: grid;

  @media (min-width: $tablet-width) {
    grid-gap: 7%;
    grid-template-columns: 47% 47%;
  }
}

.development-item:not(:last-child) {
  margin-bottom: 80px;
  @media (min-width: $tablet-width) {
    margin-bottom: 35px;
  }
}

.development-item__img {
  display: flex;
  justify-content: center;
  align-items: center;
  order: 0;
  margin-right: auto;
  margin-left: auto;
  padding: 20% 20px;

  background-color: white;
  border-radius: 30px;

  @media (min-width: $tablet-width) {
    align-self: center;
    width: 100%;
    min-width: 250px;
    height: 100%;
    margin: 0;
  }
}

.development-item__img img {
  width: auto;
  max-width: 100%;
  height: auto;
}

.development-item__text {
  position: relative;

  padding-top: 150px;
  padding-right: 10%;
  padding-left: 10%;

  @media (min-width: $tablet-width) {
    padding-top: 221px;
    padding-right: 30%;
    padding-left: 22%;
  }
}

.development-list,
.development-item-features {
  padding: 0;

  list-style: none;
}

.development-item-features__item {
  position: relative;

  padding-left: 34px;
}

.development-item-features__item:not(:last-child) {
  margin-bottom: 25px;
}

.development-item-features__item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;

  display: block;
  width: 22px;
  height: 22px;

  background-image: url("./../assets/icon-checked.svg");
}

.development-bg {
  background-color: $bg-block2;
}

.development__title {
  @extend .title-chapter;
}

.development-item__title {
  margin-bottom: 30px !important;

@extend .title-section;
}

.development-item-features {
  padding-bottom: 40px;

  font-size: 18px;
  line-height: 22px;
  color: $secondary-dark;

@extend .font-main;
}

.development-item__text::before {
  content: "";
  position: absolute;
  top: 40px;
  left: calc(50% - 65px);

  display: block;
  width: 133px;
  height: 116px;

  @media (min-width: $tablet-width) {
    top: 75px;
    left: 111px;
  }
}

.development-item__text--app {
  @media (min-width: $tablet-width) {
    order: 1;
  }
}

.development-item__text--tools {
  order: 1;
  @media (min-width: $tablet-width) {
    order: -1;
  }
}

.development-item__text--app::before {
  background: url("./../assets/icon-telephone.svg") no-repeat,
  radial-gradient(circle, $highlighter 70%, transparent 70%) no-repeat;
  background-position: left 30% ,
  top left 13px;
  background-size: 26px 43px,
  85px 85px;

  @media (min-width: $tablet-width) {
    background-position: left 50%,
    top left 13px;
    background-size: 36px 60px,
    116px 116px;
  }
}

.development-item__text--tools::before {
  background: url("./../assets/icon-laptop.svg") no-repeat,
  radial-gradient(circle, $highlighter 70%, transparent 70%) no-repeat;
  background-position: left 30%,
  top left 17px;
  background-size: 43px 40px,
  85px 85px;

  @media (min-width: $tablet-width) {
    background-position: left 50%,
    top left 17px;
    background-size: 60px 55px,
    116px 116px;
  }
}

.development__btn {
  display: flex !important;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding: 19px 74px 20px 56px !important;

  box-shadow: 0 16px 24px rgba(90, 181, 186, 0.2), 0 2px 6px rgba(90, 181, 186, 0.12), 0 0 1px rgba(0, 0, 0, 0.04);

@extend .font-link-btn-1;

@extend .button;

  @media (min-width: $tablet-width) {
    min-width: 258px;
  }
}


</style>