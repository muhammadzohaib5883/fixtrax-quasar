<template>
  <q-page padding>
    <!-- content -->

    <div class="q-mt-md bg-red q-pa-md text-red-1 rounded-borders">
      You do not have a credit card on file for automatic payments
    </div>
    <div class="q-mt-lg text-right">
      <q-btn
        label="ADD CREDIT CARD"
        color="green"
        icon="add"
        class="text-subtitle1"
      />
    </div>

    <DataTable
      :title="tableTitle"
      :columns="tableColumns"
      :rows="tableRows"
      :buttons="tableButtons"
    />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import DataTable from "components/DataTable.vue";
const columns = [
  {
    name: 'calories',
    align: 'left',
    label: 'Invoice',
    field: 'invoice',
    sortable: true
  },
  {
    name: 'calories',
    align: 'left',
    label: 'Amount',
    field: 'amount',
    sortable: true
  },
  {
    name: 'calories',
    align: 'left',
    label: 'Paid',
    field: 'paid',
    sortable: true
  },
  {
    name: 'calories',
    align: 'left',
    label: 'Balance',
    field: 'balance',
    sortable: true
  },
  {
    name: 'calories',
    align: 'left',
    label: 'Created',
    field: 'created',
    sortable: true
  },
  {
    name: 'zohaib',
    align: 'center',
    label: 'Actions',
    field: 'actions',
    sortable: true
  },
]
const rows = [
  // {
  //   invoice: 'Frozen Yogurt',
  //   amount: 159,
  //   paid: 100,
  //   balance: 24,
  //   created: 40,
  // },
]
const buttons = [
  {
    icon: 'edit',
    color: 'primary',
    event: ''
  },
  {
    icon: 'directions_car',
    color: 'primary',
    event: ''
  },
  {
    icon: 'shopping_cart',
    color: 'primary',
    event: ''
  }
]
export default defineComponent({
  name: 'Billing',
  components: {
    DataTable
  },
  data() {
    return {
      tableTitle: 'Billing',
      tableColumns: columns,
      tableRows: rows,
      tableButtons: buttons,
    }
  }
})
</script>
