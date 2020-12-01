<template>
  <b-container class="mw-800">
    <b-jumbotron class="shadow-sm wrapper">
      <b-row>
        <b-col cols="3">
          <b-nav pills vertical>
           <b-nav-item to="/profile/" exact-active-class="active"><b-icon-person-circle scale="0.7"></b-icon-person-circle> Profile</b-nav-item>
           <b-nav-item class="mt-2" to="/subscriptions" exact-active-class="active">Subscriptions</b-nav-item>
           <b-nav-item class="mt-2" to="/billing-history" exact-active-class="active"><b-icon-card-checklist scale="0.7"></b-icon-card-checklist>
  Billing History</b-nav-item>
          <b-nav-item class="mt-2" @click="logout()" exact-active-class="active">Logout</b-nav-item>
         </b-nav>
       </b-col>
       <b-col cols="9">
        
        <b-card>
          <b-card-text>
            <router-view></router-view>    
          </b-card-text>
        </b-card>
       </b-col>
     </b-row>
   </b-jumbotron>
 </b-container>
</template>
<script>
  export default {
    methods: {
      logout(){
        this.$store.commit("logout");
        this.$router.push({name: 'Login'});
      }
    }
  }
</script>