<template>
  <b-container class="mw-500">
    <b-jumbotron class="shadow-sm">
      <div>
        <h3>{{ $t('login_header') }}</h3>
        <b-form-input v-bind:placeholder="$t('email')" v-model="email"></b-form-input>
        <b-form-input class="mt-2" v-bind:placeholder="$t('name')" v-model="name"></b-form-input>
        <b-form-input class="mt-2" type="password" v-bind:placeholder="$t('password')" v-model="password"></b-form-input>
        <b-form-input class="mt-2" type="password" v-bind:placeholder="$t('retype_password')" v-model="password2"></b-form-input>
        <b-alert :show="error.state" variant="danger" class="mt-2">
        {{error.cause}}
        </b-alert>      
        <b-button block variant="primary mt-3" @click="register">{{ $t('register') }}</b-button>
        <div class="mt-4 text-center">{{ $t('have_account') }} <router-link class="font-weight-bold" to="/login">{{ $t('login_btn') }}</router-link></div>
        <div class="mt-4 text-center fs-075">{{ $t('forgot_password') }} <router-link to="/reset-password">{{ $t('click_here') }}</router-link></div>
      </div>
    </b-jumbotron>
  </b-container>
</template>
<i18n>
{
  "en": {
    "login_header": "Registration",
    "password": "Password",
    "retype_password": "Re-type password",
    "email": "Email",
    "login_btn": "Log in",
    "name": "Name",
    "register": "Register",
    "forgot_password": "Forgot password?",
    "have_account": "Have account?",
    "click_here": "Click here"
  },
  "ru": {
    "login_header": "Вход",
    "password": "Пароль",
    "retype_password": "Введите пароль еще раз",
    "email": "Почтовый адрес",
    "login_btn": "Войти",
    "name": "Имя",
    "register": "Зарегистрироваться",
    "forgot_password": "Забыли пароль?",
    "have_account": "Есть аккаунт?",
    "click_here": "Нажмите здесь"
  }
}
</i18n>
<script>
export default {
  data(){
    return {
      email: "",
      password: "",
      name: "",
      password2: "",
      error: {
        state: false,
        cause: ""
      }
    }
  },
  mounted(){

  },
  methods: {
    register() {
      if(this.password !== this.password2) {
        this.error.state = true;
        this.error.cause = "Passwords don't match"; 
        return;
      }
      this.error.state = false;
      let _this = this;
      this.axios.post(process.env.VUE_APP_API_BASEURL + "/api/v1/auth/register", {email: this.email, password: this.password, name: this.name}, {
        headers: {
          //"Cache-Control": "no-cache",
          //'Access-Control-Allow-Origin': '*',
          //'Content-Type': 'text/plain;charset=utf-8',
        }}).then(function(response) {
          if(response.status == 200) {
            _this.$router.push({name: "Login", query:{message: "Registration complete. Please check your e-mail."}});
          }
          console.log("response", response);
        }).catch(function (error) {
          _this.error.state = true;
          _this.error.cause = error.response && error.response.data && error.response.data.cause;
        });
      //this.$store.commit("login");
      //this.$router.push({name: 'Profile'});
    }
  }
}
</script>