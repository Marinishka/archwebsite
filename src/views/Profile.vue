<template>
  <b-row>
    <b-col>
      <h3>Profile</h3>
      <hr>
      <b-form-group label="Name" :state="required(name)" invalid-feedback="Field is required.">
        <b-form-input v-model="name" :state="required(name)"></b-form-input>
      </b-form-group>
      <b-form-group label="Email" :state="required(email) && isEmail(email)" invalid-feedback="Must be real email address.">
        <b-form-input v-model="email" :state="required(email) && isEmail(email)"></b-form-input>
      </b-form-group>
      <hr style="border-style: dashed none;">
      <b-form-group label="Old Password" :state="!newPassword ? null : !!currentPassword" invalid-feedback="Field is required.">
        <b-form-input type="password" :state="!newPassword ? null : !!currentPassword" v-model="currentPassword"></b-form-input>
      </b-form-group>
      <b-form-group label="New Password">
        <b-form-input type="password" v-model="newPassword"></b-form-input>
      </b-form-group>
      <b-form-group label="Password confirmation" :state="!newPassword ? null : passwordConfirmation == newPassword" invalid-feedback="Password do not match.">
        <b-form-input type="password" v-model="passwordConfirmation"></b-form-input>
      </b-form-group>
      <b-button class="float-right" v-on:click="saveProfile()" variant="primary">Save</b-button>
    </b-col>
  </b-row>
</template>

<script>

export default {
  data: function() {
    return {
      passwordConfirmation: null,
      newPassword: null,
      currentPassword: null,
      email: null,
      name: null,
      saveButtonClicked: false,
    }
  },
  methods: {
    required(value) {
      if(!this.saveButtonClicked) return null;
      if(!value || value.length == 0) return false;
      return true;
    },
    isEmail(value) {
      if(!this.saveButtonClicked) return null;
      if(!value || value.length == 0) return false;
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return false;
      return true;
    },
    saveProfile(){
      this.saveButtonClicked = true;
    }
  },
  components: {

  }
}
</script>
