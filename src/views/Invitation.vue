<template>
  <div class="in-container invitation">
    <div class="invitation__title-container">
      <h2 class="invitation__title highlighted">{{$t('invitation.title')}}</h2>
    </div>
    <div class="invitation__btn-container">
      <a href="https://apps.apple.com/app/id1447699048" class="promo__btn--ios promo__btn">{{$t('link-to-app-store')}}</a>
      <a href="https://play.google.com/store/apps/details?id=com.architeque.android.app" class="promo__btn--android promo__btn">{{$t('link-to-google-play')}}</a>
    </div>
  </div>
</template>

<style lang="scss">
.invitation {
  padding-top: 140px ;
  padding-bottom: 140px;

  text-align: center;
}

.invitation__title-container {
  @extend .title-chapter;
}

.invitation__title {
  display: inline;

@extend .title-chapter;
}

.invitation__btn-container {
  display: grid;
  justify-content: center;

  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(auto, 135px));
}


</style>