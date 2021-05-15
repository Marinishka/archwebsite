<template>
  <footer class="footer-bg">
    <b-container class="mw-1180">
      <b-row class="footer">
        <b-col>
          <b-link :to="{name: 'Home'}" v-if="$route.path !== '/'">
          <img class="footer__logo" src="./../assets/architeque_inverse.png"
          width="90" height="75" v-bind:alt="$t('alt-logo')">
        </b-link>
        <img v-else class="footer__logo" src="./../assets/architeque_inverse.png"
          width="90" height="75" v-bind:alt="$t('alt-logo')">
          <p class="footer__copyright">{{$t('footer.copyright')}}</p>
        </b-col>
        <b-col>
          <dl class="footer-nav">
            <dt class="footer-nav__title">
              {{$t('footer.nav-col.first.title')}}
            </dt>
            <dd class="footer-nav__item">
              <b-link :to="{name: 'Toolkit'}" class="footer-nav__link">
                {{$t('footer.nav-col.first.link-list.first')}}
              </b-link>
            </dd>
            <dd class="footer-nav__item">
              <b-link :to="'/'" class="footer-nav__link">
                {{$t('footer.nav-col.first.link-list.second')}}
              </b-link>
            </dd>
            <dd class="footer-nav__item">
              <b-link :to="{name: 'Pricing'}" class="footer-nav__link">
                {{$t('footer.nav-col.first.link-list.third')}}
              </b-link>
            </dd>
          </dl>
        </b-col>
        <b-col>
          <dl class="footer-nav">
            <dt class="footer-nav__title">
              {{$t('footer.nav-col.second.title')}}
            </dt>
            <dd class="footer-nav__item">
              <b-link :to="{name: 'Privacy policy'}" class="footer-nav__link">
                {{$t('footer.nav-col.second.link-list.first')}}
              </b-link>
            </dd>
            <dd class="footer-nav__item">
              <b-link :to="{name: 'Terms of use'}" class="footer-nav__link">
                {{$t('footer.nav-col.second.link-list.second')}}
              </b-link>
            </dd>
          </dl>
        </b-col>
        <b-col>
          <dl class="footer-nav">
            <dt class="footer-nav__title">
              {{$t('footer.nav-col.third.title')}}
            </dt>
            <dd class="footer-nav__item">
              <b-link href="mailto:models@ar-chiteque.com" class="footer-nav__link">
                {{$t('footer.nav-col.third.link-list.first')}}
              </b-link>
            </dd>
            <dd class="footer-nav__item">
              <b-link href="mailto:postcards@ar-chiteque.com" class="footer-nav__link">
                {{$t('footer.nav-col.third.link-list.second')}}
              </b-link>
            </dd>
            <dd class="footer-nav__item">
              <b-link href="mailto:feedback@ar-chiteque.com" class="footer-nav__link">
                {{$t('footer.nav-col.third.link-list.third')}}
              </b-link>
            </dd>
          </dl>
        </b-col>
        <b-col>
           <dl class="footer-nav">
            <dt class="footer-nav__title">
              {{$t('footer.nav-col.fourth.title')}}
            </dt>
            <dd class="footer-nav__item">
              <b-link class="footer-nav__link" href="https://www.facebook.com/ARchitequeApp/">
                <IconFacebook class="footer-nav__icon"></IconFacebook>
                {{$t('footer.nav-col.fourth.link-list.first')}}
              </b-link>
            </dd>
            <dd class="footer-nav__item">
              <b-link class="footer-nav__link" href="https://www.instagram.com/ar_chiteque/">
                <IconInstagram class="footer-nav__icon"></IconInstagram>
                {{$t('footer.nav-col.fourth.link-list.second')}}
              </b-link>
            </dd>
            <dd class="footer-nav__item">
              <b-link class="footer-nav__link" href="https://twitter.com/architeque1">
                <IconTwitter class="footer-nav__icon"></IconTwitter>
                {{$t('footer.nav-col.fourth.link-list.third')}}
              </b-link>
            </dd>
          </dl>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import IconFacebook from "../assets/icons/IconFacebook.vue"
import IconInstagram from "../assets/icons/IconInstagram.vue"
import IconTwitter from "../assets/icons/IconTwitter.vue"
export default {
  components: {
    IconFacebook,
    IconInstagram,
    IconTwitter
  } 
}
</script>

<style lang="scss">
.row {
  margin: 0 !important;
}

.footer__logo {
  margin-bottom: 25px;
}

.footer-nav {
  margin: 0 !important;
}

.footer-nav__icon {
  margin-right: 8px;
}

.footer {
  padding-top: 70px;
  padding-bottom: 90px;

  font-family: $font-ProximaNovaRegular;
}

.footer-nav__title {
  margin-bottom: 30px;

  color: $white;

@extend .title-section;
}

.footer-nav__link {
  font-size: 16px;
  color: $light-gray !important;
}

.footer-nav__item:not(:last-child) {
  margin-bottom: 20px !important;
}

.footer-nav__item:last-child {
  margin-bottom: 0 !important;
}

.footer-bg {
  background-color: $bg-dark;
}

.footer__copyright {
  margin: 0;

  font-size: 16px;
  line-height: 20px;
  color: $light-gray !important;
}

</style>
