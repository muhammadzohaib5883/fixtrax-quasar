<template>
  <q-page padding>

    <div class="text-right q-mt-md q-mr-xs">
      <q-btn
        label="ADD LOCATION"
        icon="add"
        color="green"
        to="/add-location"
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
    label: 'Calories',
    field: 'name',
    sortable: true },
  {
    name: 'calories',
    align: 'left',
    label: 'Calories',
    field: 'phone',
    sortable: true
  },
  {
    name: 'calories',
    align: 'left',
    label: 'Calories',
    field: 'address',
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
    phone: '03005858183',
    address: 'kangan pur'
  },
  {
    name: 'Frozen Yogurt',
    phone: '03005858183',
    address: 'kangan pur'
  },
  {
    name: 'Frozen Yogurt',
    phone: '03005858183',
    address: 'kangan pur'
  },
  {
    name: 'Frozen Yogurt',
    phone: '03005858183',
    address: 'kangan pur'
  },
  {
    name: 'Frozen Yogurt',
    phone: '03005858183',
    address: 'kangan pur'
  },
  {
    name: 'Frozen Yogurt',
    phone: '03005858183',
    address: 'kangan pur'
  },
  {
    name: 'Frozen Yogurt',
    phone: '03005858183',
    address: 'kangan pur'
  },
  {
    name: 'Frozen Yogurt',
    phone: '03005858183',
    address: 'kangan pur'
  },
  {
    name: 'Frozen Yogurt',
    phone: '03005858183',
    address: 'kangan pur'
  },
  {
    name: 'Frozen Yogurt',
    phone: '03005858183',
    address: 'kangan pur'
  },
]
const buttons = [
  {
    icon: 'edit',
    color: 'primary',
    event: ''
  },
  {
    icon: 'list',
    color: 'primary',
    event: ''
  },
  {
    icon: 'delete',
    color: 'red-10',
    event: ''
  },
]
export default defineComponent({
  name: 'Locations',
  components: {
    DataTable
  },
  data() {
    return {
      tableTitle: 'Locations',
      tableColumns: columns,
      tableRows: rows,
      tableButtons: buttons,
    }
  }
})
</script>
