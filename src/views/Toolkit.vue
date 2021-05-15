<template>
  <b-container class="mw-1180 toolkit">
    <h1 class="visually-hidden">{{$t('toolkit.title-charter')}}</h1>
    <h2 class="toolkit__title">{{$t('toolkit.title-section.mac')}}</h2>
    <p class="toolkit__text">{{$t('toolkit.text')}}</p>
    <img class="toolkit__img" width="684" height="496" src="./../assets/App-MAC.png" v-bind:alt="$t('toolkit.alt-img.mac')">
    <b-link class="toolkit__link">{{$t('toolkit.btn-download')}}</b-link>
    <b-link class="toolkit__link-to-other-version">{{$t('toolkit.link-to-other-app.mac')}}</b-link>
  </b-container>
</template>

<style lang="scss">
.toolkit {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 85px;
}

.toolkit__img {
  margin-bottom: 20px;
}

.toolkit__title {
  margin-bottom: 20px !important;

  font-size: 36px !important;
  line-height: 44px !important;
  font-family: $font-ProximaNovaBold;
}

.toolkit__text {
  margin-bottom: 20px !important;

  color: $halfhidden !important;

@extend .text;
}

.toolkit__link {
  margin-bottom: 42px;
  padding: 20px 69px !important;

  font-weight: 700;
  font-size: 18px !important;
  line-height: 22px !important;
  font-family: $font-WorkSans;
  color: $white !important;

  background-color: $bg-block !important;
  border-radius: 15px !important;
  box-shadow: 0 10px 20px rgba(90, 181, 186, 0.18), 0 2px 6px rgba(90, 181, 186, 0.12), 0 0 1px rgba(0, 0, 0, 0.04);
}

.toolkit__link-to-other-version {
  font-size: 14px !important;
  line-height: 17px;
  font-family: $font-ProximaNovaRegular;
  color: $secondary-dark !important;
  text-decoration: underline !important;
}

</style>