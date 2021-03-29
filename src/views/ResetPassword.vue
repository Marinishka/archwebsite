<template>
  <b-jumbotron class="shadow-sm">
    <div v-if="!isPasswordSent">
      <h5>{{ $t('password_reset') }}</h5>
      <b-form-input v-model="email" v-bind:placeholder="$t('email')"></b-form-input>
      <b-alert :show="alert.state" :variant="alert.variant" class="mt-2">
        {{alert.message}}
      </b-alert>      
      <b-button block variant="primary mt-3" @click="sendPassword()">{{ $t('reset_password') }}</b-button>
      <div class="mt-4 text-center">{{ $t('remember_password') }} <router-link class="font-weight-bold" to="/login">{{ $t('login_btn') }}</router-link></div>
    </div>
    <div v-else class="text-center" vertical-align="center">
      <b-icon-envelope-fill variant="primary" scale="5"></b-icon-envelope-fill>
      <p class="mt-5">{{ $t('instruction_sent') }}</p>
      <b-button block variant="primary mt-3" @click="$router.push({name: 'Login'})">OK</b-button>
    </div>
  </b-jumbotron>
</template>
<i18n>
{
  "en": {
    "password_reset": "Recover your password",
    "email": "Email",
    "login_btn": "Login",
    "reset_password": "Reset password",
    "remember_password": "Remember your password?",
    "instruction_sent": "We have sent you instruction how to recover your password"
  },
  "ru": {
    "password_reset": "Восстановление пароля",
    "email": "Почтовый адрес",
    "login_btn": "Войти",
    "reset_password": "Восстановить пароль",
    "remember_password": "Вспомнили пароль?",
    "instruction_sent": "Инструкция по восстановлению пароля отправлена на ваш электронный адрес"
  }
}
</i18n>
<script>
export default {
  data: function() {
    return {
      isPasswordSent: false,
      email: "",
      alert: {
        state: false,
        message: "",
        variant: "danger"
      }
    }
  },
  methods: {
    sendPassword: function(){
        let _this = this;
        this.axios.put(process.env.VUE_APP_API_BASEURL + "/api/v1/user/security/password/reset", null, {params: {email: this.email}}).then(function() {
          _this.isPasswordSent = true;
        }).catch(function (error) {
          _this.alert.state = true;
          _this.alert.variant = "danger";
          _this.alert.message = error.response && error.response.data && error.response.data.cause;
        });
      }
    }
  }
  </script>