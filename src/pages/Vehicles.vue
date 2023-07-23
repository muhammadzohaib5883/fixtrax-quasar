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
      :rows="vehicles"
      :buttons="tableButtons"
      @deleteVehicle="deleteData"
      @editVehicle="(index) => $router.push('edit-vehicle/'+ index)"
    />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import {useAppStore} from 'src/stores/app';
import DataTable from "components/DataTable.vue";
import { LocalStorage } from 'quasar';
const columns = [
  {
    name: 'select_customer',
    align: 'left',
    label: 'Name',
    field: 'select_customer',
    sortable: true
  },
  {
    name: 'Vin',
    align: 'left',
    label: 'VIN',
    field: 'vin',
    sortable: true
  },
  {
    name: 'license_plate_number',
    align: 'left',
    label: 'Licence Plate',
    field: 'license_plate_number',
    sortable: true
  },
  {
    name: 'city',
    align: 'left',
    label: 'Customer Name',
    field: 'city',
    sortable: true
  },
  {
    name: 'actions',
    align: 'center',
    label: 'Actions',
    field: row => row.e,
    sortable: true
  },
];
const buttons = [
  {
    icon: 'edit',
    color: 'primary',
    event: 'editVehicle',
    label: 'edit',
  },      
  {
    icon: 'delete',
    color: 'red-10',
    event: 'deleteVehicle',
    label: 'delete',
  },
  {
    icon: 'shopping_cart',
    color: 'primary',
    event: '',
    label: 'cart',
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
      tableButtons: buttons,
      store: useAppStore(),
    }
  },

  computed: {
    vehicles() {
      return this.store.vehicles;
    }
  },

  methods: {
    deleteData(index) {
      this.store.vehicles.splice(index, 1);
      LocalStorage.set('vehicles', this.store.vehicles);
    },

  }
})
</script>
