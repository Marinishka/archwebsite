<template>
  <b-container class="mw-1180 nav-header">
    <b-row align-v="center" align-h="between">
      <b-col cols="3">
        <b-link :to="{name: 'Home'}" v-if="$route.path !== '/'">
          <img class="logo" src="./../assets/architeque_logo.png"
          width="133" height="33" v-bind:alt="$t('alt-logo')">
        </b-link>
        <img v-else class="logo" src="./../assets/architeque_logo.png"
          width="133" height="33" v-bind:alt="$t('alt-logo')">
      </b-col>
        <b-nav class="nav-header__list" pills>
          <b-nav-item :to="{name: 'Toolkit'}" exact class="nav-header__item">{{$t('header.navigation.toolkit')}}</b-nav-item>
          <b-nav-item :to="{name: 'Pricing'}" exact class="nav-header__item">{{$t('header.navigation.pricing')}}</b-nav-item>
        <div class="user-block">
          <b-link :to="{name: 'Login'}" class="sign-in-link link" v-if="this.$store.state.isLoggedIn === false">{{$t('header.user-block.unlogged')}}</b-link>
          <b-link :to="{name: 'Profile'}" class="sign-in-link link" v-if="this.$store.state.isLoggedIn === true">{{$t('header.user-block.logged')}}</b-link>
          <button class="language-btn" v-on:click="onLangChangeBtn" v-html="this.$root.$i18n.locale"></button>
        </div>
      </b-nav>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    onLangChangeBtn: function() {
      if (this.$root.$i18n.locale === 'en') {
        this.$root.$i18n.locale = 'ru'
      } else {
        this.$root.$i18n.locale = 'en';
      }
    }
  }
}
</script>

<style lang="scss">

.sign-in-link {
  display: block;
  min-width: 150px;
  height: 39px;
  margin-right: 50px;

  line-height: 39px;
  font-family: $font-WorkSans;
  text-align: center;
  color: $secondary-dark !important;

  border: 1px solid $secondary-dark;
  border-radius: 8px;
}

.nav-link {
  margin-right: 5px;
  padding-right: 20px !important;
  padding-left: 20px !important;
}

.nav-header__list {
  align-items: center;
}

.nav-header {
  align-items: center;
  padding-top: 40px;
  padding-bottom: 115px;

  font-size: 14px;
  line-height: 17px;
  font-family: $font-ProximaNovaRegular;
}

.user-block {
  display: flex;
  align-items: center;
}

.dropdown-item {
  padding-left: 27px !important;
}

.language-btn {
  min-width: 53px;
  height: 23px;

  text-transform: uppercase !important;

  background-color: #e3e7f0;
  border: none;
  border-radius: 5px !important;
}

</style>
