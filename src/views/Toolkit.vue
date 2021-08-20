<template>
  <div class="in-container toolkit">
    <h1 class="visually-hidden">{{$t('toolkit.title-charter')}}</h1>
    <h2 v-if="operationSystem === 'mac'" class="toolkit__title">{{$t('toolkit.title-section.mac')}}</h2>
    <h2 v-else class="toolkit__title">{{$t('toolkit.title-section.win')}}</h2>
    <p class="toolkit__text">{{$t('toolkit.text')}}</p>
    <img class="toolkit__img" width="684" height="496" src="./../assets/App-MAC.png" v-bind:alt="$t('toolkit.alt-img.mac')">
    <b-link v-bind:href="linkApp" class="toolkit__link">{{$t('toolkit.btn-download')}}</b-link>
    <b-link v-if="operationSystem === 'mac'" v-bind:href="linkForOtherSystem" class="toolkit__link-to-other-version">{{$t('toolkit.link-to-other-app.mac')}}</b-link>
    <b-link v-else v-bind:href="linkForOtherSystem" class="toolkit__link-to-other-version">{{$t('toolkit.link-to-other-app.win')}}</b-link>
  </div>
</template>

<script>
import {LinkApp} from './../const'
export default {
  computed: {
    linkApp: function() {
      const platform = require('platform');
      const os = platform.os.family;
      let link = "";
      if (os.includes('OS') || os.includes('Mac')) {
        link = LinkApp.MAC;
      } else {
        link = LinkApp.WIN;
      }
      return link;
    },
    linkForOtherSystem: function() {
      const platform = require('platform');
      const os = platform.os.family;
      let link = "";
      if (os.includes('OS') || os.includes('Mac')) {
        link = LinkApp.MAC;
      } else {
        link = LinkApp.WIN;
      }
      return link;
    },
    operationSystem: function() {
      const platform = require('platform');
      const os = platform.os.family;
      if (os.includes('OS') || os.includes('Mac')) {
        return "mac";
      } else {
        return "win";
      }
    }
  },
    created() {
      document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["toolkit"];
    },
    updated() {
      document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["toolkit"];
    }
}
</script>

<style lang="scss">
.toolkit {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 85px;
}

.toolkit__img {
  width: 100%;
  max-width: 684px;
  height: auto;
  margin-bottom: 20px;
}

.toolkit__title {
  margin-bottom: 20px !important;

  font-size: 36px !important;
  line-height: 44px !important;

@extend .font-title;
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
  color: $white !important;

  background-color: $bg-block !important;
  border-radius: 15px !important;
  box-shadow: 0 10px 20px rgba(90, 181, 186, 0.18), 0 2px 6px rgba(90, 181, 186, 0.12), 0 0 1px rgba(0, 0, 0, 0.04);

@extend .font-link-btn-1;
}

.toolkit__link-to-other-version {
  font-size: 14px !important;
  line-height: 17px;
  color: $secondary-dark !important;
  text-decoration: underline !important;

@extend .font-main;
}

.toolkit__link-to-other-version:hover,
.toolkit__link-to-other-version:focus {
  text-decoration: none !important;
}

</style>
