<template>
  <b-container class="catalog">
    <div class="catalog__bg"></div>
    <h1 class="visually-hidden">{{$t('pricing.title-charter')}}</h1>
    <b-container class="mw-1180">
      <h2 class="catalog__title">{{$t('pricing.title-section')}}</h2>
      <ul class="catalog__list catalog-list">
        <li class="catalog-list__item catalog-item">
          <h3 class="catalog-item__title">{{$t('pricing.pricing-list.first.title')}}</h3>
          <div class="catalog-item__price">
            <span class="catalog-item__amount">{{$t('pricing.pricing-list.first.amount')}}</span>
            <span class="catalog-item__interval">{{$t('pricing.pricing-list.first.interval')}}</span>
            </div>
          <dl class="catalog-item__features">
            <dt class="catalog-item__features-name">{{$t('pricing.pricing-list.first.features.title')}}</dt>
            <div class="catalog-item__features-list">
              <dd class="catalog-item__feature">
                <IconChecked2 class="catalog-item__icon catalog-item__icon--active"></IconChecked2>
                {{$t('pricing.pricing-list.first.features.list.first')}}
              </dd>
              <dd class="catalog-item__feature">
                <IconChecked2 class="catalog-item__icon catalog-item__icon--active"></IconChecked2>
                {{$t('pricing.pricing-list.first.features.list.second')}}
              </dd>
              <dd class="catalog-item__feature catalog-item__feature--disabled">
                <IconChecked2 class="catalog-item__icon catalog-item__icon--disabled"></IconChecked2>
                {{$t('pricing.pricing-list.first.features.list.third')}}
              </dd>
              <dd class="catalog-item__feature catalog-item__feature--disabled">
                <IconChecked2 class="catalog-item__icon catalog-item__icon--disabled"></IconChecked2>
                {{$t('pricing.pricing-list.first.features.list.fourth')}}
              </dd>
            </div>
          </dl>
          <b-link :to="{name: 'Subscriptions'}" class="catalog__btn btn">{{$t('pricing.link-to-subscriptions')}}</b-link>
        </li>
        <div class="catalog-list__item catalog-item-wrapper--popular">
          <li class="catalog-item--popular">
            <h3 class="catalog-item__title">{{$t('pricing.pricing-list.second.title')}}</h3>
            <div class="catalog-item__price">
              <span class="catalog-item__amount">{{$t('pricing.pricing-list.second.amount')}}</span>
              <span class="catalog-item__interval">{{$t('pricing.pricing-list.second.interval')}}</span>
            </div>
            <dl class="catalog-item__features">
              <dt class="catalog-item__features-name">{{$t('pricing.pricing-list.second.features.title')}}</dt>
              <div class="catalog-item__features-list">
                <dd class="catalog-item__feature">
                  <IconChecked2 class="catalog-item__icon catalog-item__icon--active"></IconChecked2>
                  {{$t('pricing.pricing-list.second.features.list.first')}}
                </dd>
                <dd class="catalog-item__feature">
                  <IconChecked2 class="catalog-item__icon catalog-item__icon--active"></IconChecked2>
                  {{$t('pricing.pricing-list.second.features.list.second')}}
                </dd>
                <dd class="catalog-item__feature">
                  <IconChecked2 class="catalog-item__icon catalog-item__icon--active"></IconChecked2>
                  {{$t('pricing.pricing-list.second.features.list.third')}}
                </dd>
                <dd class="catalog-item__feature catalog-item__feature--disabled">
                  <IconChecked2 class="catalog-item__icon catalog-item__icon--disabled"></IconChecked2>
                  {{$t('pricing.pricing-list.second.features.list.fourth')}}
                </dd>
              </div>
            </dl>
            <b-link :to="{name: 'Subscriptions'}" class="catalog__btn btn">{{$t('pricing.link-to-subscriptions')}}</b-link>
          </li>
        </div>
        <li class="catalog-list__item catalog-item">
          <h3 class="catalog-item__title">{{$t('pricing.pricing-list.third.title')}}</h3>
          <div class="catalog-item__price"><span class="catalog-item__amount">{{$t('pricing.pricing-list.third.amount')}}</span><span class="catalog-item__interval">{{$t('pricing.pricing-list.third.interval')}}</span></div>
          <dl class="catalog-item__features">
            <dt class="catalog-item__features-name">{{$t('pricing.pricing-list.third.features.title')}}</dt>
            <div class="catalog-item__features-list">
              <dd class="catalog-item__feature">
                <IconChecked2 class="catalog-item__icon catalog-item__icon--active"></IconChecked2>
                {{$t('pricing.pricing-list.third.features.list.first')}}
              </dd>
              <dd class="catalog-item__feature">
                <IconChecked2 class="catalog-item__icon catalog-item__icon--active"></IconChecked2>
                {{$t('pricing.pricing-list.third.features.list.second')}}
              </dd>
              <dd class="catalog-item__feature">
                <IconChecked2 class="catalog-item__icon catalog-item__icon--active"></IconChecked2>
                {{$t('pricing.pricing-list.third.features.list.third')}}
              </dd>
              <dd class="catalog-item__feature">
                <IconChecked2 class="catalog-item__icon catalog-item__icon--active"></IconChecked2>
                {{$t('pricing.pricing-list.third.features.list.fourth')}}
              </dd>
            </div>
          </dl>
          <b-link :to="{name: 'Subscriptions'}" class="catalog__btn btn">{{$t('pricing.link-to-subscriptions')}}</b-link>
        </li>
      </ul>
    </b-container>
  </b-container>
</template>

<script>
import IconChecked2 from '../assets/icons/IconChecked2.vue'
export default {
  components: {
    IconChecked2
  }
}
</script>

<style lang="scss">
.catalog {
  padding-bottom: 140px;
}

.catalog-list {
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;

  list-style: none;
}

.catalog-item__price {
  display: flex;
  align-items: center;
}

.catalog-item__features {
  margin: 0 !important;
  padding-top: 8px;
  padding-bottom: 45px;
}

.catalog__bg {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  width: 100%;
  height: 531px;

  background: radial-gradient(circle at 531px top, $bg-block2 531px, white 531px) no-repeat, $bg-block2;
  background-size: 591px 100%;
}

.catalog-item {
  width: 320px;
  min-height: 497px;
  padding: 29px 31px 43px 31px;

  background-color: $white;
  border-radius: 20px;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
}

.catalog-item--popular {
  width: 100%;
  height: 100%;
  padding: 29px 31px 43px 31px;

  background-color: $white;
  border-radius: 18px;
}

.catalog-item-wrapper--popular {
  width: 320px;
  min-height: 497px;
  padding: 4px;

  background: conic-gradient(#1f28ff, #28ea99, #12c4fc, #ff5675, #1f28ff);
  border-radius: 20px;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
}

.catalog-item__amount {
  margin-right: 10px;

  font-size: 48px;
  line-height: 58px;
  font-family: $font-ProximaNovaBold;
}

.catalog-item__interval {
  color: $halfhidden !important;

@extend .text;
}

.catalog__title {
  color: $secondary-dark;

@extend .title-chapter;
}

.catalog-item__title {
  @extend .title-section;
}

.catalog-item__features-name {
  margin-bottom: 20px;

  font-size: 18px;
  line-height: 22px;
  font-family: $font-ProximaNovaBold;
}

.catalog-item__features-list {
  padding-top: 25px;

  border-top: 1px solid $stroke;
}

.catalog-item__feature {
  margin-bottom: 20px !important;

  vertical-align: middle;

@extend .text;
}

.catalog-item__feature--disabled {
  color: $halfhidden;
}

.catalog-item__icon {
  margin-right: 8px;
}

.catalog-item__icon--active {
  fill: $bg-block;
}

.catalog-item__icon--disabled {
  fill: $halfhidden;
}

.catalog__btn {
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding-top: 18px !important;
  padding-bottom: 18px !important;

  font-family: $font-ProximaNovaRegular;

@extend .button;
}

</style>