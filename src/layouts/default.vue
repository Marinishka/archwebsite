<template>
  <div class="page">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "../views/Header.vue"
import Footer from "../views/Footer.vue"
  export default {
    components: {
      Header,
      Footer,
    }
  }
</script>

<style>
.page {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}

</style>
