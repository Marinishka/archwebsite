<template>
  <b-jumbotron class="shadow-sm">
    <div v-if="!isPasswordSent">
      <h5>Восстановление пароля</h5>
      <b-form-input v-model="text" placeholder="Email"></b-form-input>
      <b-button block variant="primary mt-3" @click="sendPassword()">Восстановить пароль</b-button>
      <div class="mt-4 text-center">Вспомнили пароль? <router-link class="font-weight-bold" to="/login">Вход</router-link></div>
    </div>
    <div v-else class="text-center" vertical-align="center">
      <b-icon-envelope-fill variant="primary" scale="5"></b-icon-envelope-fill>
      <p class="mt-5">Инструкция по восстановлению пароля отправлена на ваш электронный адрес</p>
      <b-button block variant="primary mt-3" @click="$router.push({name: 'Login'})">Ok</b-button>
    </div>
  </b-jumbotron>
</template>
<script>
  export default {
    data: function() {
      return {
        isPasswordSent: false
      }
    },
    methods: {
      sendPassword: function(){
        this.isPasswordSent = true;
      }
    }
  }
</script>