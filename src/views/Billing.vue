<template>
  <b-row>
    <b-col>
      <h3>Billing History</h3>
      <hr>
      <a  href="">Download all invoices</a> <a href="" class="ml-4">Send all invoices to my email</a>
      <b-table striped hover :items="items" class="mt-4">
        <template #cell(status)="row"><span :class="statusClass(row.item.status)">{{row.item.status}}</span></template>
      </b-table>
    </b-col>
  </b-row>
</template>
<script>
  export default {
    computed: {
      statusClass() {
        return function(status) {
          if(status=='Failed') return 'text-danger'; 
          if(status=='Success') return 'text-success'; 
          if(status=='Pending') return 'text-warning'; 
        }
      }
    },
    data() {
      return {
        items: [
          { date: "12.24.2020", amount: '10.0$', info: 'Advanced plan', status: "Pending", actions: ""},
          { date: "12.24.2020", amount: '49.0$', info: 'Business plan', status: "Success", actions: ""},
          { date: "12.24.2020", amount: '10.0$', info: 'Advanced plan', status: "Failed", actions: ""},
          { date: "12.24.2020", amount: '49.0$', info: 'Advanced plan', status: "Success", actions: ""},
          { date: "12.24.2020", amount: '10.0$', info: 'Advanced plan', status: "Failed", actions: ""},
        ]
      }
    }
  }
</script>