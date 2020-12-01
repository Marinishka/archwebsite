<template>
  <b-jumbotron class="shadow-sm">
    <div>
      <h3>Вход</h3>
      <b-form-input placeholder="Email"></b-form-input>
      <b-form-input class="mt-2" placeholder="Password"></b-form-input>
      <b-button block variant="primary mt-3" @click="login()">Log in</b-button>
      <div class="mt-4 text-center">Нет аккаунта? <router-link class="font-weight-bold" to="/register">Регистрация</router-link></div>
      <div class="mt-4 text-center fs-075">Забыли пароль? <router-link to="/reset-password">Нажмите здесь</router-link></div>
    </div>
  </b-jumbotron>
</template>
<script>
  export default {
    methods: {
      login() {
        this.$store.commit("login");
        console.log(this.$store.state.isLoggedIn)
        this.$router.push({name: 'Profile'});
      }
    }
  }
</script>