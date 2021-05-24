<template>
  <b-row>
    <b-col>
      <b-overlay :show="subscriptions.length == 0 || !currentSubscription" rounded="sm">
        <h3>{{ $t('subscriptions.title') }}</h3>
        <b-alert :show="alert.state" :variant="alert.variant" dismissible class="mt-2">
          {{alert.message}}
        </b-alert>      
        <b-modal @ok="handleModalOk" :static="true" id="modal-1" v-bind:title="$t('subscriptions.cancel-header') + ' ' + currentSubscription.name">
          <p class="my-4">{{ $t('subscriptions.cancel-confirm') }}</p>
        </b-modal>
        <hr>
        <b-alert show variant="warning" class="text-dark">
          <b-icon-check2-circle variant="success"></b-icon-check2-circle> {{ $t('subscriptions.currently-you-have') }} <b>{{currentSubscription.name}}</b>{{ $t('subscriptions.activated') }}.
          <a class="float-right text-muted" v-if="currentSubscription.statusCode == 2" v-b-modal.modal-1><small v-if="currentSubscription.price > 0">{{ $t('subscriptions.cancel-subscription') }}</small></a>
          <span v-if="currentSubscription.status == 3">{{ $t('subscriptions.remain-active-until') }} {{moment(currentSubscription.endTime).format('DD.MM.YYYY HH:mm')}}</span>
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
                <span>
                  <b-button v-if="(currentSubscription.statusCode == 1 || currentSubscription.statusCode == 2 || currentSubscription.statusCode == 3) && subscription.id == currentSubscription.id" variant="secondary" block disabled class="subscription-button text-white muted">{{ $t('subscriptions.Activated') }}</b-button>
                  <b-button v-else variant="primary" block class="subscription-button subscription-2-button text-white" @click="upgradeSubscription(subscription)">{{ $t('subscriptions.upgrade') }}</b-button>    
                </span>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>

      </b-overlay>
    </b-col>
  </b-row>
</template>

<script>
import _ from 'lodash'

import Vue from 'vue'
import { BModal } from 'bootstrap-vue'
import moment from 'moment';
Vue.component('b-modal', BModal)

let locales = {"en": 1, "ru": 2}

export default {
  data: function() {
    return {
      alert: {
        state: false,
        message: "",
        variant: "danger"
      },
      subscriptions: [],
      currentSubscription: {},
    }
  },
  created() {
    this.getCurrentSubscription();
    this.getAllSubscription();
    document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["subscriptions"];
  },
  updated(){
    document.title = this.$root.$i18n.messages[this.$root.$i18n.locale].titles["subscriptions"];
  },
  methods: {
    moment: moment,
    getCurrentSubscription() {
      let _this = this;
      this.currentSubscription = {};
      this.axios.post(process.env.VUE_APP_API_BASEURL + "/api/v1/billing/subscription/current", {}, {headers: {
        "Authorization": "Bearer " + this.$store.state.token
      }}).then(function(response) {
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
        _this.getCurrentSubscription();
        _this.getAllSubscription();
      }).catch(function (error) {
        console.log("error",error);
      });
    },
    upgradeSubscription(subscription) {
      let _this = this;
      _this.alert.state = false;
      if(subscription.price == 0) {
        this.axios.post(process.env.VUE_APP_API_BASEURL + "/api/v1/billing/subscription/getFree", {}, {headers: {
          "Authorization": "Bearer " + this.$store.state.token
        }}).then(function() {
          _this.getAllSubscription();
          _this.getCurrentSubscription();
        }).catch(function (error) {
          console.log("error",error,error.response.data)
          _this.getAllSubscription();
          _this.getCurrentSubscription();
        });  
      } else {
        this.axios.post(process.env.VUE_APP_API_BASEURL + "/api/v1/billing/subscription/checkout", {productID:subscription.id, successURL: location.origin + "/portal/#/checkout/status", cancelURL: location.origin + "/portal/#/checkout/status"}, {headers: {
          "Authorization": "Bearer " + this.$store.state.token
        }}).then(function(response) {
          let stripe = window.Stripe(process.env.VUE_APP_STRIPE_PK_KEY);
          stripe.redirectToCheckout({ sessionId: response.data.sessionID });
        }).catch(function (error) {
          _this.alert.state = true;
          _this.alert.variant = "danger";
          _this.alert.message = error.response && error.response.data && error.response.data.cause;
          //console.log("error, response",error.response.data.cause,response);
          //error.response.data.cause
        });

      }
    }
  }
}  
</script>