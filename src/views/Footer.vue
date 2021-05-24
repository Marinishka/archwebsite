<template>
  <footer class="footer-bg">
    <div class="in-container">
      <b-row class="footer">
        <b-col class="footer__col">
          <b-link :to="{name: 'Home'}" v-if="$route.path !== '/'">
            <img class="footer__logo" src="./../assets/architeque_inverse.png"
          width="82" height="75" v-bind:alt="$t('alt-logo')">
          </b-link>
          <img v-else class="footer__logo" src="./../assets/architeque_inverse.png"
          width="82" height="75" v-bind:alt="$t('alt-logo')">
          <p class="footer__copyright">{{$t('footer.copyright')}}</p>
        </b-col>
        <b-col class="footer__col">
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
              <b-link :href="hrefApp" class="footer-nav__link">
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
        <b-col class="footer__col">
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
        <b-col class="footer__col">
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
        <b-col class="footer__col">
           <dl class="footer-nav footer-nav--socials">
            <dt class="footer-nav__title">
              {{$t('footer.nav-col.fourth.title')}}
            </dt>
            <dd class="footer-nav__item">
              <b-link class="footer-nav__link" href="https://www.facebook.com/ARchitequeApp/">
                <IconFacebook class="footer-nav__icon"></IconFacebook>
                <p class="footer-nav__social-network-name">{{$t('footer.nav-col.fourth.link-list.first')}}</p>
              </b-link>
            </dd>
            <dd class="footer-nav__item">
              <b-link class="footer-nav__link" href="https://www.instagram.com/ar_chiteque/">
                <IconInstagram class="footer-nav__icon"></IconInstagram>
                <p class="footer-nav__social-network-name">{{$t('footer.nav-col.fourth.link-list.second')}}</p>
              </b-link>
            </dd>
            <dd class="footer-nav__item">
              <b-link class="footer-nav__link" href="https://twitter.com/architeque1">
                <IconTwitter class="footer-nav__icon"></IconTwitter>
                <p class="footer-nav__social-network-name">{{$t('footer.nav-col.fourth.link-list.third')}}</p>
              </b-link>
            </dd>
          </dl>
        </b-col>
      </b-row>
    </div>
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
  },
  computed: {
    hrefApp: function() {
      let os = "";
  
       const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/android/i.test(userAgent)) {
        os = "Android";
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        os = "iOS";
      } else {
        os = "unknown";
      }
      
      if (os === "Android") {
        return "https://play.google.com/store/apps/details?id=com.architeque.android.app"; 
      } else {
        return "https://itunes.apple.com/app/apple-store/id1447699048";
      }
    }
  }
}
</script>

<style lang="scss">
.row {
  margin: 0 !important;
}

.footer {
  flex-direction: column;
  padding-top: 70px;
  padding-bottom: 90px;

  text-align: center;

@extend .font-main;

  @media (min-width: $tablet-width) {
    flex-direction: row;

    text-align: left;
  }
}

.footer__logo {
  margin-bottom: 25px;
}

.footer-nav {
  margin: 0 !important;
}

.footer-nav__icon {
  width: 50px;
  height: 50px;
  @media (min-width: $tablet-width) {
    width: 22px;
    height: 22px;
    margin-right: 8px;
  }
}

.footer-nav__social-network-name {
  display: none;
  @media (min-width: $tablet-width) {
    display: inline;

    color: $light-gray !important;
  }
}

.footer__col:not(:last-child) {
  margin-bottom: 30px;
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

.footer-nav--socials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: $tablet-width) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: start;
  }
}

.footer-nav--socials .footer-nav__title {
  width: 100%;
  @media (min-width: $tablet-width) {
    width: auto;
  }
}

.footer-nav--socials .footer-nav__item:not(:last-child) {
  margin-right: 20px;
  @media (min-width: $tablet-width) {
    margin-right: 0;
  }
}

.footer-nav--socials .footer-nav__link {
  display: inline-block;
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
