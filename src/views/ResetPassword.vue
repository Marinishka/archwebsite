<template>
  <b-container class="mw-500">
    <b-jumbotron class="shadow-sm">
      <div v-if="!isPasswordSent">
        <h5>{{ $t('reset-password.title') }}</h5>
        <b-form-input v-model="email" v-bind:placeholder="$t('email')"></b-form-input>
        <b-alert :show="alert.state" :variant="alert.variant" class="mt-2">
        {{alert.message}}
        </b-alert>      
        <b-button block variant="primary mt-3" @click="sendPassword()">{{ $t('reset-password.reset-password') }}</b-button>
        <div class="mt-4 text-center">{{ $t('reset-password.remember-password') }} <router-link class="font-weight-bold" :to="{name: 'Login'}">{{ $t('reset-password.login-btn') }}</router-link></div>
      </div>
      <div v-else class="text-center" vertical-align="center">
        <b-icon-envelope-fill variant="primary" scale="5"></b-icon-envelope-fill>
        <p class="mt-5">{{ $t('reset-password.instruction-sent') }}</p>
        <b-button block variant="primary mt-3" @click="$router.push({name: 'Login'})">OK</b-button>
      </div>
    </b-jumbotron>
  </b-container>
</template>

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