<template>
  <q-page padding>
    <!-- content -->

    <div class="text-right q-mt-md q-mr-xs">
      <q-btn
        label="ADD EMPLOYEE"
        icon="add"
        color="green"
        to="/add-employ"
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
    label: 'Location',
    field: 'location',
    sortable: true
  },
  {
    name: 'calories',
    align: 'left',
    label: 'Email',
    field: 'email',
    sortable: true
  },
  {
    name: 'calories',
    align: 'left',
    label: 'Type',
    field: 'type',
    sortable: true
  },
  {
    name: 'actions',
    align: 'center',
    label: 'actions',
    field: row => row.e,
    sortable: true
  },
]
const rows = [
  {
    name: 'Frozen Yogurt',
    location: 'kusar',
    email: 'muhammadzohaib5883@gmail.com',
    type: 'rdasdadasda'
  },
  {
    name: 'a Yogurt',
    location: 'kusar',
    email: 'muhammadzohaib5883@gmail.com',
    type: 'rdasdadasda'
  },
  {
    name: 'Frozen Yogurt',
    location: 'kusar',
    email: 'muhammadzohaib5883@gmail.com',
    type: 'rdasdadasda'
  },
  {
    name: 'Frozen Yogurt',
    location: 'kusar',
    email: 'muhammadzohaib5883@gmail.com',
    type: 'rdasdadasda'
  },
  {
    name: 'Frozen Yogurt',
    location: 'kusar',
    email: 'muhammadzohaib5883@gmail.com',
    type: 'rdasdadasda'
  },
  {
    name: 'Frozen Yogurt',
    location: 'kusar',
    email: 'muhammadzohaib5883@gmail.com',
    type: 'rdasdadasda'
  },
  {
    name: 'Frozen Yogurt',
    location: 'kusar',
    email: 'muhammadzohaib5883@gmail.com',
    type: 'rdasdadasda'
  },
  {
    name: 'Frozen Yogurt',
    location: 'kusar',
    email: 'muhammadzohaib5883@gmail.com',
    type: 'rdasdadasda'
  },
  {
    name: 'Frozen Yogurt',
    location: 'kusar',
    email: 'muhammadzohaib5883@gmail.com',
    type: 'rdasdadasda'
  },
  {
    name: 'Frozen Yogurt',
    location: 'kusar',
    email: 'muhammadzohaib5883@gmail.com',
    type: 'rdasdadasda'
  },
  {
    name: 'Frozen Yogurt',
    location: 'kusar',
    email: 'muhammadzohaib5883@gmail.com',
    type: 'rdasdadasda'
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
  }
]
export default defineComponent({
  name: 'Employees',
  components: {
    DataTable
  },
  data() {
    return {
      tableTitle: 'Employees',
      tableColumns: columns,
      tableRows: rows,
      tableButtons: buttons,
    }
  }
})
</script>
