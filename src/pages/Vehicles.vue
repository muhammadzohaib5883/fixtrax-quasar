<template>
  <q-page padding>
    <!-- content -->

    <div class="text-right q-mt-md q-mr-xs">
      <q-btn
        to="/add-vehicle"
        label="ADD VEHICLES"
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
    label: 'VIN',
    field: 'vin',
    sortable: true
  },
  {
    name: 'calories',
    align: 'left',
    label: 'Licence Plate',
    field: 'licencePlate',
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
    vin: '1FTPX14514K245449',
    licencePlate: 'ABC1234 [NJ]',
    customerName: 'Emily Krausers'
  },
  {
    name: 'Frozen Yogurt',
    vin: '1FTPX14514K245449',
    licencePlate: 'ABC1234 [NJ]',
    customerName: 'Emily Krausers'
  },
  {
    name: 'Frozen Yogurt',
    vin: '1FTPX14514K245449',
    licencePlate: 'ABC1234 [NJ]',
    customerName: 'Emily Krausers'
  },
  {
    name: 'Frozen Yogurt',
    vin: '1FTPX14514K245449',
    licencePlate: 'ABC1234 [NJ]',
    customerName: 'Emily Krausers'
  },
  {
    name: 'Frozen Yogurt',
    vin: '1FTPX14514K245449',
    licencePlate: 'ABC1234 [NJ]',
    customerName: 'Emily Krausers'
  },
  {
    name: 'Frozen Yogurt',
    vin: '1FTPX14514K245449',
    licencePlate: 'ABC1234 [NJ]',
    customerName: 'Emily Krausers'
  },
]
const buttons = [
  {
    icon: 'edit',
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
  name: 'Vehicles',
  components: {
    DataTable
  },
  data() {
    return {
      tableTitle: 'Vehicles',
      tableColumns: columns,
      tableRows: rows,
      tableButtons: buttons
    }
  }
})
</script>
