<template>
  <b-container class="mw-1180 not-found">
    <h1 class="not-found__title">Error 404</h1>
    <p class="not-found__text">Page not found.</p>
  </b-container>
</template>

<style lang="scss">

.not-found {
  padding-bottom: 140px;
}
.not-found__title {
  @extend .title-chapter;
}

.not-found__text {
  text-align: justify;
  text-indent: 1.5em;

@extend .text;
}

</style>