<template>
  <q-page padding>
    <!-- content -->
    <div class="row q-col-gutter-md q-pt-lg">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
        <q-input
          filled
          v-model="date"
          type="date"
          hint="Start Date"
          placeholder="Start Date"
        />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
        <q-input
          filled
          v-model="date"
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
          :class="$q.screen.gt.md ? 'q-mt-sm' : ''"
          color="green"
          class="text-subtitle1"
        />
      </div>
      <div class="text-right col-xs-12 col-sm-8 col-md-6 col-lg-3 col-xl-3">
        <q-btn
          label="DOWNLOAD REPORT"
          class="q-mt-sm text-subtitle1"
          color="green"
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
    label: 'Location',
    field: 'location',
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
    label: 'Date',
    field: 'date',
    sortable: true
  },
]
const rows = [
  {
    order: '01',
    vehicle: '2009 Honda Accord',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    amount: '$200.000000',
    date: '05/19/2015'
  },
  {
    order: '01',
    vehicle: '2009 Honda Accord',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    amount: '$200.000000',
    date: '05/19/2015'
  },
  {
    order: '01',
    vehicle: '2009 Honda Accord',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    amount: '$200.000000',
    date: '05/19/2015'
  },
  {
    order: '01',
    vehicle: '2009 Honda Accord',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    amount: '$200.000000',
    date: '05/19/2015'
  },
  {
    order: '01',
    vehicle: '2009 Honda Accord',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    amount: '$200.000000',
    date: '05/19/2015'
  },
  {
    order: '01',
    vehicle: '2009 Honda Accord',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    amount: '$200.000000',
    date: '05/19/2015'
  },
  {
    order: '01',
    vehicle: '2009 Honda Accord',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    amount: '$200.000000',
    date: '05/19/2015'
  },
  {
    order: '01',
    vehicle: '2009 Honda Accord',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    amount: '$200.000000',
    date: '05/19/2015'
  },
  {
    order: '01',
    vehicle: '2009 Honda Accord',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    amount: '$200.000000',
    date: '05/19/2015'
  },
  {
    order: '01',
    vehicle: '2009 Honda Accord',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    amount: '$200.000000',
    date: '05/19/2015'
  },
  {
    order: '01',
    vehicle: '2009 Honda Accord',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    amount: '$200.000000',
    date: '05/19/2015'
  },
]
export default defineComponent({
  name: 'SalesReport',
  components: {
    DataTable
  },
  data() {
    return {
      tableTitle: 'SalesReport',
      tableColumns: columns,
      tableRows: rows,
    }
  }
})
</script>
