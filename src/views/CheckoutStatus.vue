<template>
  <b-row>
    <b-col style="min-height:200px;">
      <b-overlay :show="isCheckingPaymentStatus" rounded="sm">
        <h3>{{$t('checkoutStatus.title')}}</h3>
        <hr>
        <b-alert :show="!isCheckingPaymentStatus" :variant="getAlertVariant()" class="text-dark">
          <span v-if="status=='completed'">{{$t('checkoutStatus.completed')}}</span>
           <router-link :to="{name: 'Subscriptions'}" class="float-right text-muted"><small >{{$t('checkoutStatus.link')}}</small></router-link>
        </b-alert>
      </b-overlay>
    </b-col>
  </b-row>
</template>
<script>
//import _ from 'lodash'



export default {
  data: function() {
    return {
      isCheckingPaymentStatus: true,
      status: 'undefined',
    }
  },
  created() {
    document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["checkout-status"];
    console.log("this.$route.query",this.$route.query)
    //let _this = this;
    this.checkStatus();
    
  },
  updated() {
    document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["checkout-status"];
  },
  methods: {
    getAlertVariant() {
      if(this.status == "completed") return "success";
      else return "warning";
    },
    checkStatus() {
      //api/v1/billing/subscription/checkSessionStatus
      let _this = this;
      this.axios.post(process.env.VUE_APP_API_BASEURL + "/api/v1/billing/subscription/checkSessionStatus", {sessionID: this.$route.query.session_id}, {headers: {
        "Authorization": "Bearer " + this.$store.state.token
      }}).then(function(response) {
        console.log("response",response)
        _this.status = response.data.status;
        _this.isCheckingPaymentStatus = false;
      }).catch(function (error) {
        console.log("error",error);
        _this.isCheckingPaymentStatus = false;
      });



    }
  }
}  
</script>