<template>
  <b-row>
    <b-col>
      <b-overlay :show="subscriptions.length == 0 || !currentSubscription" rounded="sm">
        <h3>{{ $t('subscriptions') }}</h3>
        <b-modal @ok="handleModalOk" :static="true" id="modal-1" v-bind:title="$t('login_header') + ' ' + currentSubscription.name + $t('subscription')">
          <p class="my-4">{{ $t('cancel_confirm') }}</p>
        </b-modal>
        <hr>
        <b-alert show variant="warning" class="text-dark">
          <b-icon-check2-circle variant="success"></b-icon-check2-circle> {{ $t('currently_you_have') }} <b>{{currentSubscription.name}}</b>{{ $t('activated') }}.
          <a class="float-right text-muted" v-if="currentSubscription.status == 2" v-b-modal.modal-1><small v-if="currentSubscription.price > 0">{{ $t('cancel_subscription') }}</small></a>
          
          <span v-if="currentSubscription.status == 3">{{ $t('remain_active_until') }} {{moment(currentSubscription.endTime).format('DD.MM.YYYY HH:mm')}}</span>
        </b-alert>
        <b-card class="border-2 mt-3" v-for="subscription in subscriptions" :key="subscription.id">
          <b-card-text>
            <b-row>
              <b-col>
                <h4>{{subscription.name}}</h4>
                <div class="mt-4">
                  <div class="mt-1" v-for="feature in subscription.features.split(';')" :key="feature"><b-icon-check-circle variant="dark"></b-icon-check-circle> {{feature}}</div>
                </div>
              </b-col>
              <b-col>
                <h1 class="float-right">{{subscription.priceDescription}}</h1>
                <span v-if="subscription.price>0">
                  <b-button v-if="subscription.status == 1 && subscription.id == currentSubscription.id" variant="secondary" block disabled class="subscription-button text-white muted">{{ $t('Activated') }}</b-button>
                  <b-button v-else variant="primary" block class="subscription-button subscription-2-button text-white" @click="upgradeSubscription(subscription.id)">{{ $t('upgrade') }}</b-button>    
                </span>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>

      </b-overlay>
    </b-col>
  </b-row>
</template>
<i18n>
{
  "en": {
    "subscriptions": "Subscriptions",
    "cancel": "Cancel",
    "cancel_confirm": "Are you sure you want to cancel you subscription?",
    "currently_you_have": "Currently, you have",
    "activated": " activated",
    "Activated": "Activated",
    "cancel_subscription": "Cancel subscription",
    "remain_active_until": "It will remain active until",
    "upgrade": "Upgrade"
  },
  "ru": {
    "subscriptions": "Подписки",
    "cancel": "Отмена",
    "cancel_confirm": "Вы уверены, что хотите отказаться от подписки?",
    "currently_you_have": "Текущая подписка",
    "activated": " ",
    "Activated": "Активная",
    "cancel_subscription": "Отменить подписку",
    "remain_active_until": "Подписка останется активной до",
    "upgrade": "Обновить"
  }
}
</i18n>
<script>
import _ from 'lodash'
//import Stripe from 'stripe'

//let stripe = "";
import Vue from 'vue'
import { BModal } from 'bootstrap-vue'
import moment from 'moment';
Vue.component('b-modal', BModal)
/*
setTimeout(function(){
  if(window.Stripe) {
    stripe = window.Stripe("pk_test_eWgp5Z4WAKwEHPHbZrn3gami001wuL24sb");
  }
},2000);
*/
let locales = {"en": 1, "ru": 2}

export default {
  data: function() {
    return {
      subscriptions: [],
      currentSubscription: {},
    }
  },
  created() {
    this.getCurrentSubscription();
    this.getAllSubscription();
  },
  methods: {
    moment: moment,
    getCurrentSubscription() {
      let _this = this;
      this.currentSubscription = {};
      this.axios.post(process.env.VUE_APP_API_BASEURL + "/api/v1/billing/subscription/current", {}, {headers: {
        "Authorization": "Bearer " + this.$store.state.token
      }}).then(function(response) {
        //console.log("current subscription",response);
        let subscription = _.find(response.data.product.locales,{cultureId: locales[_this.$i18n.locale]});
        _this.currentSubscription = {...subscription, endTime: response.data.endTime, status: response.data.status, id:response.data.product.id, price:response.data.product.price};
      }).catch(function (error) {
        console.log("error",error);
      });
    },
    getAllSubscription() {
      let _this = this;
      this.subscriptions = [];
      this.axios.post(process.env.VUE_APP_API_BASEURL + "/api/v1/billing/subscription/products", {}, {headers: {
        "Authorization": "Bearer " + this.$store.state.token
      }}).then(function(response) {
        console.log("esponse.data",response.data,_this.$i18n.locale);
        _this.subscriptions = _.map(response.data, function(s){
          let subscription = _.find(s.locales, {cultureId: locales[_this.$i18n.locale]});
          return {...subscription, id:s.id, price:s.price};
        });
      }).catch(function (error) {
        console.log("error",error);
      });
    },
    handleModalOk() {
      let _this = this;
      this.axios.post(process.env.VUE_APP_API_BASEURL + "/api/v1/billing/subscription/cancelCurrent", {}, {headers: {
        "Authorization": "Bearer " + this.$store.state.token
      }}).then(function() {
        //console.log("response",response);
        _this.getCurrentSubscription();
        _this.getAllSubscription();
      }).catch(function (error) {
        console.log("error",error);
      });
    },
    upgradeSubscription(subscriptionId) {
      this.axios.post(process.env.VUE_APP_API_BASEURL + "/api/v1/billing/subscription/checkout", {productID:subscriptionId, successURL: location.origin + "/portal/#/checkout/status", cancelURL: location.origin + "/portal/#/checkout/status"}, {headers: {
        "Authorization": "Bearer " + this.$store.state.token
      }}).then(function(response) {
        //console.log("response",response);
        let stripe = window.Stripe("pk_test_eWgp5Z4WAKwEHPHbZrn3gami001wuL24sb");
        stripe.redirectToCheckout({ sessionId: response.data.sessionID });
      }).catch(function (error) {
        console.log("error",error);
      });
      //console.log(location.origin,subscriptionId);
    }
  }
}  
</script>