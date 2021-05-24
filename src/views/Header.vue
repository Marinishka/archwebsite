<template>
  <div class="in-container header">
      <div class="header__logo">
        <router-link :to="{name: 'Home'}" v-if="$route.path !== '/'">
          <img class="logo" src="./../assets/architeque_logo.png"
          width="113" height="33" v-bind:alt="$t('alt-logo')">
        </router-link>
        <img v-else class="logo" src="./../assets/architeque_logo.png"
          width="113" height="33" v-bind:alt="$t('alt-logo')">
      </div>
      <nav class="header__nav header-nav">
        <button ref="toggle" class="header__toggle header-toggle" v-on:click="onToggleClick">
          <div></div>
        </button>
        <ul ref="list" class="header-nav__list header-nav-list">
          <li class="header-nav__item">
            <router-link class="header-nav-list__link" :to="{name: 'Toolkit'}">{{$t('header.navigation.toolkit')}}</router-link>
          </li>
          <li class="header-nav__item">
            <router-link class="header-nav-list__link" :to="{name: 'Pricing'}">{{$t('header.navigation.pricing')}}</router-link>
          </li>
          <li class="user-block">
            <b-link  :to="{name: 'Login'}" class="sign-in-link link" v-if="this.$store.state.isLoggedIn === false">{{$t('header.user-block.unlogged')}}</b-link>
            <b-link :to="{name: 'Profile'}" class="sign-in-link link" v-if="this.$store.state.isLoggedIn === true">{{$t('header.user-block.logged')}}</b-link>
            <div class="languages" v-bind:class="{languagesOpen: isLangSelectVisible}" v-on:mouseleave="onLangSelectOut">
              <button class="languages-select-item__btn" v-on:click="onLangBtnClick" v-bind:value="this.$root.$i18n.locale">{{languages[this.$root.$i18n.locale]}}</button>
              <ul class="languages-select" v-if="isLangSelectVisible">
                <li v-for="language in availableNotActiveLanguages" v-bind:key="language" class="languages-select__item languages-select-item">
                  <button class="languages-select-item__btn" v-on:click="onLangChangeBtn" v-bind:value="language">{{languages[language]}}</button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
import {Languages} from './../const'
export default {
  data: function () {
    return {
      languages: Languages,
      isLangSelectVisible: false
    }
  },
  computed: {
    availableNotActiveLanguages: function () {
      return this.$root.$i18n.availableLocales.filter((language) => language !== this.$root.$i18n.locale)
    }
  },
  methods: {
    onLangSelectOut: function() {
      this.isLangSelectVisible = false;
    },
    onLangBtnClick: function() {
      this.isLangSelectVisible = true;
    },
    onLangChangeBtn: function({target}) {
      if (this.$root.$i18n.locale !== target.value) {
        this.$root.$i18n.locale = target.value;
        document.documentElement.setAttribute('lang', this.$root.$i18n.locale);
      }
      this.isLangSelectVisible = false;
    },
    onToggleClick: function() {
      this.$refs.list.classList.toggle('header-nav__list--visible');
      this.$refs.toggle.classList.toggle('header-toggle--open');
    }
  },
   watch: {
    $route() {
      this.$refs.list.classList.remove('header-nav__list--visible');
      this.$refs.toggle.classList.remove('header-toggle--open');
    }
  }
}
</script>

<style lang="scss">

.header {
  padding-top: 20px;
  padding-bottom: 40px;

  @media (min-width: $tablet-width) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 115px;

    font-size: 14px;
    line-height: 17px;
  }
}

.header__logo {
  padding-bottom: 20px;
  @media (min-width: $tablet-width) {
    padding-bottom: 0;
  }
}

.header-nav {
  position: relative;
}

.sign-in-link {
  display: block;
  width: 100%;
  min-width: 150px;
  height: 41px;

  line-height: 39px;
  text-align: center;
  color: $secondary-dark !important;

  border-bottom: 1px $light-gray solid;

@extend .font-link-btn-2;

  @media (min-width: $tablet-width) {
    width: auto;
    height: 39px;
    margin-right: 150px;

    font-weight: 500;

    border: 1px solid $secondary-dark;
    border-radius: 8px;
  }
}

.header__toggle {
  position: absolute;
  top: -35px;
  right: -10px;

  width: 30px;
  padding: 0;
  display: block;

  background-color: transparent;
  border: none;
  transform: translate(-50%, -50%);
  @media (min-width: $tablet-width) {
    display: none;
  }
}

.header__toggle::before,
.header__toggle::after,
.header__toggle div {
  content: "";

  display: block;
  width: 100%;
  height: 4px;
  margin: 4px 0;

  background: $secondary-dark;
  border-radius: 3px;

  transition: 0.5s;
}

.header-toggle--open:before {
  transform: translateY(9px) rotate(135deg);
}

.header-toggle--open:after {
  transform: translateY(-7px) rotate(-135deg);
}

.header-toggle--open div {
  transform: scale(0);
}

.header-nav__list {
  display: none;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0 !important;
  padding-left: 0;

  list-style: none;

  @media(min-width: $tablet-width) {
    position: relative;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.header-nav__list--visible {
  display: flex;

  border-top: 1px $light-gray solid;
}

.nav-list-enter,
.nav-list-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.nav-list-enter-active,
.nav-list-leave-active {
  transition: all 1s;
}

.header-nav-list__link {
  display: block;
  width: 100%;
  padding: 12px 25px;

  color: $secondary-dark !important;

  border-bottom: 1px $light-gray solid;

  @media(min-width: $tablet-width) {
    border-bottom: none;
    border-radius: 5px;
  }
}

.header-nav-list__link:hover,
.header-nav-list__link:focus {
  background-color: $secondary !important;
}

.header-nav__item {
  width: 100%;

  text-align: center;

@extend .font-link-btn-2;

  @media (min-width: $tablet-width) {
    width: auto;
  }
}

.user-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: $tablet-width) {
    width: auto;
    margin-left: 25px;
  }
}

.languages {
  width: 100%;
  min-width: 100px;

  @media (min-width: $tablet-width) {
    position: absolute;
    top: 0;
    right: 0;

    width: auto;
    overflow: hidden;

    border: 1px solid transparent;
    border-radius: 5px;
  }
}

.languagesOpen {
  @media (min-width: $tablet-width) {
    border-color: $light-gray;
  }
}

.languages-select-item__btn {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 11px ;
  padding-bottom: 11px;

  text-transform: uppercase !important;

  background-color: transparent;
  border: none;
  border-bottom: 1px $light-gray solid;

@extend .font-link-btn-2;

  @media (min-width: $tablet-width) {
    padding-top: 10px ;
    padding-bottom: 10px;

    border-bottom: none;
  }
}

.languages-select-item__btn:hover,
.languages-select-item__btn:focus {
  background-color: $secondary;
}

.languages-select-item__btn:focus {
  outline: none !important;
  opacity: 0.8;
}

.languages-select-item__btn:active {
  opacity: 1;
}

.languages-select {
  margin: 0;
  padding: 0;

  list-style: none;
}



</style>
