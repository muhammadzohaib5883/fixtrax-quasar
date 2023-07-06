<template>
  <q-page padding>

    <!-- content -->
    <div class="row q-col-gutter-md q-pt-lg">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
        <q-input
          v-model="date"
          filled
          type="date"
          hint="Start date"
        />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
        <q-input
          v-model="date"
          filled
          type="date"
          hint="End date"
        />
      </div>
      <div
        :class="$q.screen.lt.sm ? 'text-right' : ''"
        class="col-xs-12 col-sm-4 col-md-6 col-lg-3 col-xl-3"
      >
        <q-btn
          label="FILTER"
          icon="search"
          color="green"
          class="text-subtitle1"
          :class="$q.screen.gt.md ? 'q-mt-sm' : ''"
        />
      </div>
      <div class="text-right col-xs-12 col-sm-8 col-md-6 col-lg-3 col-xl-3">
        <q-btn
          label="DOWNLOAD REPORT"
          color="green"
          class="q-mt-sm text-subtitle1"
          icon="download"
        />
      </div>
    </div>

    <DataTable
      :title="tableTitle"
      :columns="tableColumns"
      :rows="tableRows"
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
    label: 'Orders',
    field: 'order',
    sortable: true
  },
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
    label: 'Location',
    field: 'location',
    sortable: true
  },
  {
    name: 'calories',
    align: 'left',
    label: 'Date',
    field: 'date',
    sortable: true
  },
]
const rows = [
  {
    order: '10',
    name: 'Frozen Yogurt',
    amount: '15900',
    location: 'Lahore',
    date: '24-11-2022',
  },
  {
    order: '10',
    name: 'Frozen Yogurt',
    amount: '15900',
    location: 'Lahore',
    date: '24-11-2022',
  },
  {
    order: '10',
    name: 'Frozen Yogurt',
    amount: '15900',
    location: 'Lahore',
    date: '24-11-2022',
  },
  {
    order: '10',
    name: 'Frozen Yogurt',
    amount: '15900',
    location: 'Lahore',
    date: '24-11-2022',
  },
  {
    order: '10',
    name: 'Frozen Yogurt',
    amount: '15900',
    location: 'Lahore',
    date: '24-11-2022',
  },
  {
    order: '10',
    name: 'Frozen Yogurt',
    amount: '15900',
    location: 'Lahore',
    date: '24-11-2022',
  }
]
export default defineComponent({
  name: 'OrderExpenseReport',
  components: {
    DataTable
  },
  data() {
    return {
      tableTitle: 'OrderExpenseReport',
      tableColumns: columns,
      tableRows: rows,
    }
  }
})
</script>
