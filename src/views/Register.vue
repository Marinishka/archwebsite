<template>
  <b-jumbotron class="shadow-sm">
    <div>
      <h3>Вход</h3>
      <b-form-input v-model="text" placeholder="Email"></b-form-input>
      <b-form-input v-model="text" class="mt-2" placeholder="Name"></b-form-input>
      <b-form-input v-model="text" class="mt-2" placeholder="Password"></b-form-input>
      <b-form-input v-model="text" class="mt-2" placeholder="Re-type password"></b-form-input>
      <b-button block variant="primary mt-3">Зарегистрироваться</b-button>
      <div class="mt-4 text-center">Есть аккаунт? <router-link class="font-weight-bold" to="/login">Вход</router-link></div>
      <div class="mt-4 text-center fs-075">Забыли пароль? <router-link to="/reset-password">Нажмите здесь</router-link></div>
    </div>
  </b-jumbotron>
</template>