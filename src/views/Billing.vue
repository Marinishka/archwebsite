<template>
  <b-row>
    <b-col>
      <b-overlay :show="!invoices" rounded="sm">
        <h3>{{ $t('billing_history') }}</h3>
        <hr>
        <!--<a  href="">Download all invoices</a> <a href="" class="ml-4">Send all invoices to my email</a>-->
        <b-table striped hover :fields=fields :items="invoices" class="mt-4">
          <template #cell(status)="row"><span :class="statusClass(row.item.status)">{{row.item.status}}</span></template>
          <template #cell(actions)="row"><span v-html="row.item.actions"></span></template>
        </b-table>
      </b-overlay>
    </b-col>
  </b-row>
</template>
<i18n>
{
  "en": {
    "billing_history": "Billing History",
    "status": "Status",
    "subscription": "Subscription",
    "actions": "Actions",
    "amount": "Amount",
    "date": "Date",
    "pending": "Pending",
    "success": "Success",
    "failed": "Failed",
    "download_pdf": "Download PDF"
  },
  "ru": {
    "billing_history": "История платежей",
    "status": "Статус",
    "subscription": "Подписка",
    "actions": "Действия",
    "amount": "Сумма",
    "date": "Дата",
    "pending": "В ожидании",
    "success": "Успешно",
    "failed": "Не удалось",
    "download_pdf": "Сохранить PDF"
  }
}
</i18n>
<script>
  import moment from 'moment'
  import _ from 'lodash'

  let locales = {"en": 1, "ru": 2}

  export default {
    computed: {
      statusClass() {
        return function(status) {
          if(status== this.$i18n.t('failed')) return 'text-danger'; 
          if(status==this.$i18n.t('success')) return 'text-success'; 
          if(status==this.$i18n.t('pending')) return 'text-warning'; 
        }
      }
    },
    data() {
      return {
        invoices: null,
        fields: [
          {date: { label: this.$i18n.t('date') }},
          {amount: { label: this.$i18n.t('amount') }},
          {subscription: { label: this.$i18n.t('subscription') }},
          {status: { label: this.$i18n.t('status') }},
          {actions: { label: this.$i18n.t('actions') }},
        ]

      }
    },
    created(){
      let _this = this;
      this.axios.post(process.env.VUE_APP_API_BASEURL + "/api/v1/billing/subscription/invoices", {}, {headers: {
        "Authorization": "Bearer " + this.$store.state.token
      }}).then(function(response) {
        _this.invoices = [];
        response.data.forEach(function(invoice){
          console.log(moment(invoice.updateTime).format("MM.DD.YYYY"))
          let product = _.find(invoice.subscription.product.locales, {cultureId: locales[_this.$i18n.locale]})
          let status = _this.$i18n.t('pending');
          if(invoice.status == 2) status =  _this.$i18n.t('success');
          if(invoice.status == 4) status =  _this.$i18n.t('failed');
          _this.invoices.push({
            date: moment(invoice.updateTime).format("MM.DD.YYYY"),
            amount: invoice.subscription.product.price + ".0$",
            subscription: product.name,
            status: status,
            actions: "<a href="+invoice.invoicePDF+">"+ _this.$i18n.t('download_pdf')+"</a>"
          });
        })
        //_this.invoices = response.data;
      }).catch(function (error) {
        console.log("error",error);
      });      
      // https://dev.ar0.app:7700/api/v1/billing/subscription/invoices
    }
  }
</script>