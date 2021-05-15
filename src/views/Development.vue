<template>
  <div class="development-bg">
    <b-container class="mw-1180 development">
      <h2 class="development__title">{{$t('development.title')}}</h2>
      <ul class="development__list development-list">
        <li class="development-list__item development-item ">
          <div class="development-item__img">
            <img width="391px" height="442px" src="./../assets/Phones.png" v-bind:alt="$t('development.alt-img.phones')">
          </div>
          <div class="development-item__text development-item__text--app">
            <h3 class="development-item__title">{{$t('development.list.first.title')}}</h3>
            <ul class="development-item__fitures development-item-fitures">
              <li class="development-item-fitures__item">{{$t('development.list.first.features.first')}}</li>
              <li class="development-item-fitures__item">{{$t('development.list.first.features.second')}}</li>
              <li class="development-item-fitures__item">{{$t('development.list.first.features.third')}}</li>
            </ul>
            <b-link class="development__btn btn">{{$t('btn-download')}}</b-link>
          </div>
        </li>
        <li class="development-list__item development-item">
          <div class="development-item__text development-item__text--tools">
            <h3 class="development-item__title">{{$t('development.list.second.title')}}</h3>
            <ul class="development-item__fitures development-item-fitures">
              <li class="development-item-fitures__item">{{$t('development.list.second.features.first')}}</li>
              <li class="development-item-fitures__item">{{$t('development.list.second.features.second')}}</li>
              <li class="development-item-fitures__item">{{$t('development.list.second.features.third')}}</li>
            </ul>
            <b-link :to="{name: 'Toolkit'}" class="development__btn btn">{{$t('btn-download')}}</b-link>
          </div>
          <div class="development-item__img">
            <img width="458" height="398" src="./../assets/windows.png" v-bind:alt="$t('development.alt-img.app')">
          </div>
        </li>
      </ul>
    </b-container>
  </div>
</template>

<style lang="scss">

.development {
  padding-top: 70px;
  padding-bottom: 75px;
}

.development-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.development-item:not(:last-child) {
  margin-bottom: 35px;
}

.development-item__img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 554px;
  height: 683px;

  background-color: white;
  border-radius: 30px;
}

.development-item__text {
  position: relative;

  width: 554px;
  padding-top: 221px;
  padding-right: 160px;
  padding-left: 111px;
}

.development-list,
.development-item-fitures {
  padding: 0;

  list-style: none;
}

.development-item-fitures__item {
  position: relative;

  padding-left: 34px;
}

.development-item-fitures__item:not(:last-child) {
  margin-bottom: 25px;
}

.development-item-fitures__item::before {
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

.development-item-fitures {
  padding-bottom: 40px;

  font-size: 18px;
  line-height: 22px;
  font-family: $font-ProximaNovaRegular;
  color: $secondary-dark;
}

.development-item__text::before {
  content: "";
  position: absolute;
  top: 75px;
  left: 111px;

  display: block;
  width: 133px;
  height: 116px;
}

.development-item__text--app::before {
  background: url("./../assets/icon-telephone.svg") no-repeat,
  radial-gradient(circle, $highlighter 70%, transparent 70%) no-repeat;
  background-position: left 50%,
  top left 13px;
  background-size: 36px 60px,
  116px 116px;
}

.development-item__text--tools::before {
  background: url("./../assets/icon-laptop.svg") no-repeat,
  radial-gradient(circle, $highlighter 70%, transparent 70%) no-repeat;
  background-position: left 50%,
  top left 17px;
  background-size: 60px 55px,
  116px 116px;
}

.development__btn {
  display: flex !important;
  justify-content: center;
  align-items: center;
  min-width: 258px;
  padding: 19px 74px 20px 56px !important;

  font-family: $font-WorkSans;

  box-shadow: 0 16px 24px rgba(90, 181, 186, 0.2), 0 2px 6px rgba(90, 181, 186, 0.12), 0 0 1px rgba(0, 0, 0, 0.04);

@extend .button;
}

</style>