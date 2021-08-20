<template>
  <b-container class="mw-500">
    <b-jumbotron class="shadow-sm">
      <div>
        <h3>{{ $t('register.title') }}</h3>
        <b-form-input v-bind:placeholder="$t('register.email')" v-model="email"></b-form-input>
        <b-form-input class="mt-2" v-bind:placeholder="$t('register.name')" v-model="name"></b-form-input>
        <b-form-input class="mt-2" type="password" v-bind:placeholder="$t('register.password')" v-model="password"></b-form-input>
        <b-form-input class="mt-2" type="password" v-bind:placeholder="$t('register.retype-password')" v-model="password2"></b-form-input>
        <b-alert :show="error.state" variant="danger" class="mt-2">
        {{error.cause}}
        </b-alert>      
        <b-button block variant="primary mt-3" @click="register">{{ $t('register.register') }}</b-button>
        <div class="mt-4 text-center">
          {{ $t('register.have-account') }} 
          <router-link class="font-weight-bold" :to="{name: 'Login'}">{{ $t('register.login-btn') }}</router-link>
        </div>
        <div class="mt-4 text-center fs-075">
          {{ $t('register.forgot-password') }} 
        <router-link :to="{name: 'ResetPassword'}">{{ $t('register.click-here') }}</router-link>
        </div>
      </div>
    </b-jumbotron>
  </b-container>
</template>

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
  created() {
    document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["register"];
  },
  updated() {
    document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["register"];
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