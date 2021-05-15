<template>
  <b-container class="mw-1180 invitation">
    <h2 class="invitation__title highlighted">{{$t('invitation.title')}}</h2>
    <div>
      <a href="https://apps.apple.com/app/id1447699048" class="promo__btn--ios promo__btn">{{$t('link-to-app-store')}}</a>
      <a href="https://play.google.com/store/apps/details?id=com.architeque.android.app" class="promo__btn--android promo__btn">{{$t('link-to-google-play')}}</a>
    </div>
  </b-container>
</template>

<style lang="scss">
.invitation {
  padding-top: 140px ;
  padding-bottom: 140px;

  text-align: center;
}

.invitation__title {
  display: inline-block;

@extend .title-chapter;
}


</style>