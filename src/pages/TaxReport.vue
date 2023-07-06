<template>
  <q-page padding>
    <!-- content -->

    <div class="row q-col-gutter-md q-pt-lg">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
        <q-input
          v-model="date"
          filled type="date"
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
        :class="$q.screen.lt.md ? 'text-right' : ''"
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
    label: 'Tax',
    field: 'Tax',
    sortable: true
  },
  {
    name: 'calories',
    align: 'center',
    label: 'Date',
    field: 'Date',
    sortable: true
  },
]
const rows = [
  {
    order: '13',
    vehicle: 'Frozen Yogurt',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    Tax: 24000,
    Date: '28-11-2020',
  },
  {
    order: '13',
    vehicle: 'Frozen Yogurt',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    Tax: 24000,
    Date: '28-11-2020',
  },
  {
    order: '13',
    vehicle: 'Frozen Yogurt',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    Tax: 24000,
    Date: '28-11-2020',
  },
  {
    order: '13',
    vehicle: 'Frozen Yogurt',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    Tax: 24000,
    Date: '28-11-2020',
  },
  {
    order: '13',
    vehicle: 'Frozen Yogurt',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    Tax: 24000,
    Date: '28-11-2020',
  },
  {
    order: '13',
    vehicle: 'Frozen Yogurt',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    Tax: 24000,
    Date: '28-11-2020',
  }, {
    order: '13',
    vehicle: 'Frozen Yogurt',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    Tax: 24000,
    Date: '28-11-2020',
  }, {
    order: '13',
    vehicle: 'Frozen Yogurt',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    Tax: 24000,
    Date: '28-11-2020',
  }, {
    order: '13',
    vehicle: 'Frozen Yogurt',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    Tax: 24000,
    Date: '28-11-2020',
  }, {
    order: '13',
    vehicle: 'Frozen Yogurt',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    Tax: 24000,
    Date: '28-11-2020',
  }, {
    order: '13',
    vehicle: 'Frozen Yogurt',
    customerName: 'Ch Muhammad Zohaib',
    location: 'Kangan Pur',
    Tax: 24000,
    Date: '28-11-2020',
  },
]
export default defineComponent({
  name: 'TaxReport',
  components: {
    DataTable
  },
  data() {
    return {
      tableTitle: 'TaxReport',
      tableColumns: columns,
      tableRows: rows,
    }
  }
})
</script>
