<template>
  <b-container class="mw-500">
    <b-jumbotron class="shadow-sm">
      <div>
        <h3>{{ $t('login.title') }}</h3>
        <b-form-input v-bind:placeholder="$t('email')" v-model="email"></b-form-input>
        <b-form-input type="password" class="mt-2" v-bind:placeholder="$t('login.password')" v-model="password"></b-form-input>
        <b-alert :show="alert.state" :variant="alert.variant" class="mt-2">
        {{alert.message}}
        </b-alert>      
        <b-button block variant="primary mt-3" @click="login()">
          {{$t('login.login-btn')}}
        </b-button>
        <div class="mt-4 text-center">
          {{$t('login.no-account')}}
          <router-link class="font-weight-bold" :to="{name: 'Register'}">{{$t('login.register-link')}}</router-link>
        </div>
        <div class="mt-4 text-center fs-075">
          {{$t('login.forgot-password')}}
          <router-link to="/reset-password">{{$t('login.click-here')}}</router-link>
        </div>
      </div>
    </b-jumbotron>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      alert: {
        state: false,
        message: "",
        variant: "danger"
      }
    }
  },
  created(){
    console.log(this.$i18n)
    //this.$i18n.locale = 'ru';
  },
  mounted(){
    console.log("this.$route",this.$route.query, this.$route.query.message);
    if(this.$route.query && this.$route.query.message) {
      this.alert.message = this.$route.query.message;
      this.alert.variant = "success";
      this.alert.state = true;
    }
  },
  methods: {
    login() {
      this.alert.state = false;
      this.alert.message = "";
      let _this = this;
      this.axios.post(process.env.VUE_APP_API_BASEURL + "/api/v1/auth/login", {email: this.email, password: this.password}, {
        headers: {
          //'Access-Control-Allow-Origin': '*',
        }}).then(function(response) {
          if(response.data && response.data.token) {
            _this.$store.commit("login", response.data.token);
            _this.$router.push({name: "Profile"});
          }
        }).catch(function (error) {
          _this.alert.state = true;
          _this.alert.variant = "danger";
          _this.alert.message = error.response && error.response.data && error.response.data.cause;
        });
      //this.$store.commit("login");
      //this.$router.push({name: 'Profile'});
    }
  }
}
</script>