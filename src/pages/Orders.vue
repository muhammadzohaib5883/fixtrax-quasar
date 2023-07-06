<template>
  <q-page padding>
    <!-- content -->

    <div class="text-right q-mt-md q-mr-xs">
      <q-btn
        to="/add-order"
        label="ADD ORDERS"
        icon="add"
        class="q-mr-sm q-mt-sm text-subtitle1"
        color="green"
      />
      <q-btn
        label="CLOSE ORDERS"
        icon="gpp_bad"
        color="secondary"
        class="q-mt-sm text-subtitle1"
      />
    </div>

    <DataTable
      :columns="tableColumns"
      :rows="tableRows"
      :buttons="tableButtons"
      :title="tableTitle"
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
    label: 'Orders #',
    field: 'order',
    sortable: true
  },
  {
    name: 'calories',
    align: 'left',
    label: 'Vehicle',
    field: 'vehicle',
    sortable: true
  },
  {
    name: 'calories',
    align: 'left',
    label: 'Customer Name',
    field: 'customerName',
    sortable: true
  },
  {
    name: 'calories',
    align: 'left',
    label: 'Total',
    field: 'total',
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
    name: 'actions',
    align: 'center',
    label: 'Actions',
    field: row => row.e,
    sortable: true
  },
]
const rows = [
  {
    order: '102',
    vehicle: 'vehicle etc',
    customerName: 'Ch Muhammad Zohaib',
    total: '250',
    balance: '50000'
  },
  {
    order: '102',
    vehicle: 'vehicle etc',
    customerName: 'Ch Muhammad Zohaib',
    total: '250',
    balance: '50000'
  },
  {
    order: '102',
    vehicle: 'vehicle etc',
    customerName: 'Ch Muhammad Zohaib',
    total: '250',
    balance: '50000'
  },
  {
    order: '102',
    vehicle: 'vehicle etc',
    customerName: 'Ch Muhammad Zohaib',
    total: '250',
    balance: '50000'
  },
  {
    order: '102',
    vehicle: 'vehicle etc',
    customerName: 'Ch Muhammad Zohaib',
    total: '250',
    balance: '50000'
  },
]
const buttons = [
  {
    icon: 'shopping_cart',
    color: 'primary',
    event: ''
  }
]
export default defineComponent({
  name: 'Orders',
  components: {
    DataTable
  },
  data() {
    return {
      tableTitle: 'Orders',
      tableColumns: columns,
      tableRows: rows,
      tableButtons: buttons,
    }
  }
})
</script>
