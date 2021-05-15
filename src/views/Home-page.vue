<template>
  <main>
    <div class="home-page__bg"></div>
    <h1 class="visually-hidden">Сайт Architeque - приложения дополненной реальности</h1>
    <Promo></Promo>
    <Applying></Applying>
    <Development></Development>
    <Price></Price>
    <Invitation></Invitation>
  </main>
</template>

<script>

import Promo from "../views/Promo.vue"
import Applying from "../views/Applying.vue"
import Development from "../views/Development.vue"
import Price from "./Price.vue"
import Invitation from "../views/Invitation.vue"
  export default {
    components: {
      Promo,
      Applying,
      Development,
      Price,
      Invitation
    }
  }
</script>

<style lang="scss">

.home-page__bg {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  width: 100vw;
  height: 810px;

  background-image: url("./../assets/Bg-main.png");
  background-repeat: no-repeat;
  background-position: top right;
}

</style>
