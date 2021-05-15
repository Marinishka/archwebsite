<template>
  <div class="price">
    <div class="price__container">
      <h2 class="price__title">{{$t('price.title')}}</h2>
      <b-link :to="{name: 'Pricing'}" class="price__btn btn">{{$t('price.link-to-pricing')}}</b-link>
    </div>
  </div>
</template>

<style lang="scss">

.price__container {
  max-width: 1157px;
  min-height: 319px;
  margin-right: auto;
  margin-left: auto;
  padding: 70px 370px;

  text-align: center;

  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 24px 32px rgba(0, 0, 0, 0.04), 0 16px 24px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
}

.price__title {
  @extend .title-chapter;
}

.price {
  background: radial-gradient(circle at 100% top, $bg-block2 45%, white 45%) no-repeat, linear-gradient($bg-block2 50%, transparent 50%);
  background-size: 172px 100%;
}

.price__btn {
  display: inline-block !important;
  padding: 28px 60px 27px 33px !important;

  font-family: $font-ProximaNovaRegular;

  box-shadow: 0 16px 24px rgba(90, 181, 186, 0.2), 0 2px 6px rgba(90, 181, 186, 0.12), 0 0 1px rgba(0, 0, 0, 0.04);

@extend .button;
}

</style>