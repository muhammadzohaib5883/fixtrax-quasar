<template>
  <q-page padding>
    <!-- content -->

    <div class="text-right q-mt-md q-mr-xs">
      <q-btn
        to="/add-expense"
        label="ADD EXPENSE"
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
    label: 'Name',
    field: 'name',
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
    label: 'Passed On',
    field: 'passadOn',
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
    name: 'Frozen Yogurt',
    amount: 50000.00,
    passadOn: '2017-03-16'
  },
  {
    name: 'Frozen Yogurt',
    amount: 50000.00,
    passadOn: '2017-03-16'
  },
  {
    name: 'Frozen Yogurt',
    amount: 50000.00,
    passadOn: '2017-03-16'
  },
  {
    name: 'Frozen Yogurt',
    amount: 50000.00,
    passadOn: '2017-03-16'
  },
  {
    name: 'Frozen Yogurt',
    amount: 50000.00,
    passadOn: '2017-03-16'
  },
  {
    name: 'Frozen Yogurt',
    amount: 50000.00,
    passadOn: '2017-03-16'
  },
  {
    name: 'Frozen Yogurt',
    amount: 50000.00,
    passadOn: '2017-03-16'
  },
]
const buttons = [
  {
    icon: 'edit',
    color: 'teal-8',
    event: ''
  },
  {
    icon: 'delete',
    color: 'red-10',
    event: ''
  },
]
export default defineComponent({
  name: 'Expenses',
  components: {
    DataTable
  },
  data() {
    return {
      tableTitle: 'Expenses',
      tableColumns: columns,
      tableRows: rows,
      tableButtons: buttons,
    }
  }
})
</script>
