<template>
  <b-row>
    <b-col>
      <b-alert fade v-model="dismissSuccessMessageCountDown" class="position-fixed fixed-top text-center" style="z-index: 999999; top: 90px; margin: 0 auto; max-width:750px;" variant="success" dismissible>
        {{successMessage}}
      </b-alert>      
      <b-alert fade v-model="dismissErrorMessageCountDown" class="position-fixed fixed-top text-center" style="z-index: 999999; top: 90px; margin: 0 auto; max-width:750px;" variant="danger" dismissible>
        {{errorMessage}}
      </b-alert>      
      <h3>{{ $t('profile.title') }}</h3>
      <hr>
      <b-form-group v-bind:label="$t('profile.name')" :state="required(name)" v-bind:invalid-feedback="$t('profile.field-required')">
        <b-form-input v-model="name" :state="required(name)"></b-form-input>
      </b-form-group>
      <b-form-group v-bind:label="$t('email')">
        <b-form-input v-model="email" disabled></b-form-input>
      </b-form-group>
      <b-form-group><b-button class="float-right" v-on:click="saveProfile()" variant="primary">{{ $t('profile.save-btn') }}</b-button></b-form-group>
      <hr style="border-style: dashed none;">
      <b-form-group v-bind:label="$t('profile.old-password')" :state="!newPassword ? null : !!currentPassword"  v-bind:invalid-feedback="$t('profile.field-required')">
        <b-form-input type="password" :state="!newPassword ? null : !!currentPassword" v-model="currentPassword"></b-form-input>
      </b-form-group>
      <b-form-group v-bind:label="$t('profile.new-password')">
        <b-form-input type="password" v-model="newPassword" :state="!newPassword ? null : passwordConfirmation == newPassword"></b-form-input>
      </b-form-group>
      <b-form-group v-bind:label="$t('profile.password-confirmation')" :state="!newPassword ? null : passwordConfirmation == newPassword" v-bind:invalid-feedback="$t('profile.passwords-do-not-match')">
        <b-form-input type="password" v-model="passwordConfirmation" :state="!newPassword ? null : passwordConfirmation == newPassword"></b-form-input>
      </b-form-group>
      <b-button class="float-right" v-on:click="updatePassword()" variant="primary">{{ $t('profile.update-btn') }}</b-button>
    </b-col>
  </b-row>
</template>

<script>

export default {
  data: function() {
    return {
      dismissSuccessMessageCountDown: 0,
      dismissErrorMessageCountDown: 0,
      successMessage: null,
      errorMessage: null,
      passwordConfirmation: null,
      newPassword: null,
      currentPassword: null,
      email: null,
      name: null,
      about: null,
      saveButtonClicked: false,
    }
  },
  created() {
    document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["profile"];
    let _this = this;
    this.axios.get(process.env.VUE_APP_API_BASEURL + "/api/v1/user/security", {headers: {
      "Authorization": "Bearer " + this.$store.state.token
    }}).then(function(response) {
      _this.email = response.data.email;
      _this.name = response.data.name;
      _this.about = response.data.about;
    }).catch(function (error) {
      _this.dismissErrorMessageCountDown = 5;
      _this.errorMessage = error.response.data.cause;
    });
  },
  updated() {
    document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["profile"];
  },
  methods: {
    required(value) {
      if(!this.saveButtonClicked) return null;
      if(!value || value.length == 0) return false;
      return true;
    },
    updatePassword(){
      let _this = this;
      console.log(this.newPassword, this.currentPassword, this.newPassword, this.passwordConfirmation)
      if (!this.newPassword || !this.currentPassword || this.newPassword !== this.passwordConfirmation) return;
      this.axios.put(process.env.VUE_APP_API_BASEURL + "/api/v1/user/security/password", {old: this.currentPassword, new: this.newPassword}, {headers: {
        "Authorization": "Bearer " + this.$store.state.token
      }}).then(function() {
        _this.dismissSuccessMessageCountDown = 5;
        _this.successMessage = "Password updated"
      }).catch(function (error) {
        _this.currentPassword = "";
        _this.dismissErrorMessageCountDown = 5;
        _this.errorMessage = error.response.data.cause || error.message;
      });
    },
    saveProfile(){
      if(!this.name) return;
      let _this = this;
      this.saveButtonClicked = true;
      this.axios.put(process.env.VUE_APP_API_BASEURL + "/api/v1/user/security", {name: this.name, about: this.about}, {headers: {
        "Authorization": "Bearer " + this.$store.state.token
      }}).then(function() {
        _this.dismissSuccessMessageCountDown = 5;
        _this.successMessage = "Profile updated"
      }).catch(function (error) {
        _this.dismissErrorMessageCountDown = 5;
        _this.errorMessage = error.response.data.cause;
      });

    }
  },
  components: {

  }
}
</script>
