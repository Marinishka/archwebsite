<template>
  <div class="applying-bg">
    <div class="in-container applying">
      <h2 class="applying__title">{{$t('applying.title')}}</h2>
      <dl class="applying__list applying-list">
        <div class="applying-list__wrapper">
          <div class="applying-list__item applying-list__item--marketing">
            <dt class="applying-list__title">{{$t('applying.list.first.title')}}</dt>
            <dd class="applying-list__text">{{$t('applying.list.first.text')}}</dd>
          </div>
        </div>
        <div class="applying-list__wrapper">
          <div class="applying-list__item applying-list__item--commerce">
            <dt class="applying-list__title">{{$t('applying.list.second.title')}}</dt>
            <dd class="applying-list__text">{{$t('applying.list.second.text')}}</dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<style lang="scss">
.applying {
  padding-top: 70px;
  padding-bottom: 70px;
}

.applying-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 0 !important;
  @media (min-width: $tablet-width) {
    flex-direction: row;
  }
}

.applying-bg {
  background-color: $bg-block;
}

.applying-list__title {
  @extend .title-section;
}

.applying-list__text {
  margin: 0 !important;

  font-size: 12px;
  line-height: 1.2;
  color: black;

@extend .font-main;
  @media (min-width: $tablet-width) {
    font-size: 14px;
    line-height: 17px;
  }
}

.applying__title {
  color: $white !important;

@extend .title-chapter;
}

.applying-list__wrapper {
  position: relative;

  margin-right: auto;
  margin-left: auto;
  @media (min-width: $tablet-width) {
    margin-right: none;
    margin-left: none;

    font-size: 14px;
    line-height: 17px;
  }
}

.applying-list__wrapper::before {
  content: "";
  position: absolute;
  top: -14px;
  left: -14px;

  display: block;
  width: 250px;
  height: 100px;

  background: radial-gradient(circle, $decor 25%, transparent 25%);
  background-size: 6px 6px;
}

.applying-list__wrapper:not(:last-child) {
  margin-bottom: 30px;
  @media (min-width: $tablet-width) {
    margin-right: 70px;
    margin-bottom: 0;
  }
}

.applying-list__item {
  position: relative;

  height: 100%;
  padding: 90px 30px 30px 40px;

  background-color: $white;
  border-radius: 8px;

  @media (min-width: $tablet-width) {
    max-width: 545px;
    padding: 145px 40px 50px 50px;
  }
}

.applying-list__item::after {
  content: "";
  position: absolute;
  top: 23px;
  left: 40px;

  display: block;
  width: 75px;
  height: 55px;

  @media (min-width: $tablet-width) {
    top: 43px;
    left: 50px;

    width: 103px;
    height: 85px;

    background-size: 66px 66px,
    85px 85px;
  }
}

.applying-list__item--marketing::after {
  background: url("./../assets/icon-digital-marketing.svg") no-repeat,
  radial-gradient(circle, $decor2 70%, transparent 70%) no-repeat;
  background-position: left 50%,
  top left 17px;
  background-size: 46px 46px,
  55px 55px;

  @media (min-width: $tablet-width) {
    background-size: 66px 66px,
    85px 85px;
  }
}

.applying-list__item--commerce::after {
  background: url("./../assets/icon-market.svg") no-repeat,
  radial-gradient(circle, $decor2 70%, transparent 70%) no-repeat;
  background-position: left 50%,
  top left 17px;
  background-size: 46px 46px,
  55px 55px;
  @media (min-width: $tablet-width) {
    background-size: 66px 66px,
    85px 85px;
  }
}



</style>