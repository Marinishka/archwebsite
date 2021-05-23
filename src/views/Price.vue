<template>
  <div class="price">
    <div class="in-container">
      <div class="price__container">
        <h2 class="price__title">{{$t('price.title')}}</h2>
        <b-link :to="{name: 'Pricing'}" class="price__btn"><p class="btn__inner">{{$t('price.link-to-pricing')}}</p></b-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.price__container {
  max-width: 1180px;
  min-height: 319px;
  margin-right: auto;
  margin-left: auto;
  padding: 70px 30px;

  text-align: center;

  background-color: $white;
  border-radius: 16px;
  box-shadow: 0 24px 32px rgba(0, 0, 0, 0.04), 0 16px 24px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  @media (min-width: $tablet-width) {
    padding-right: 20px;
    padding-left: 20px;
  }
}

.price__title {
  @extend .title-chapter;
}

.price {
  background: radial-gradient(circle at 100% top, $bg-block2 45%, white 45%) no-repeat,
  linear-gradient($bg-block2 50%, transparent 50%);
  background-size: 158px 100%;
  @media (min-width: $tablet-width) {
    background: radial-gradient(circle at 172px top, $bg-block2 172px, white 172px) no-repeat, linear-gradient($bg-block2 50%, transparent 50%);
    background-size: 172px 100%;
  }
}

.price__btn {
  display: inline-block !important;
  padding: 28px 60px 27px 33px !important;

  font-size: 18px !important;
  line-height: 22px !important;
  color: $white !important;

  background-color: $bg-block !important;
  border-radius: 15px !important;
  box-shadow: 0 16px 24px rgba(90, 181, 186, 0.2), 0 2px 6px rgba(90, 181, 186, 0.12), 0 0 1px rgba(0, 0, 0, 0.04);

@extend .font-link-btn-2;
}

.btn__inner {
  position: relative;

  margin: 0 !important;
}

.btn__inner::after {
  content: "";
  position: absolute;
  top: calc(50% - 10px);
  right: 0;

  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: -30px;
  margin-left: 10px;

  vertical-align: middle;

  background-image: url("~@/assets/icon-right-arrow.svg");
}


</style>