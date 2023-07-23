<template>
  <q-page padding>
    <!-- content -->

    <q-btn label="Dialog" color="primary" @click="dialog = true" />

    <q-dialog v-model="dialog" persistent>
      <q-card>
        <q-toolbar elevated class="bg-primary text-white">
          <q-toolbar-title>Add Customer</q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <q-card-section>
          <q-form>
            <div class="row q-col-gutter-md q-mt-xs">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <q-input 
                  filled 
                  label="First Name" 
                  v-model="form.first_name"
                  :rules="validationRuls" 
                />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <q-input 
                  filled 
                  label="Address Line 1" 
                  v-model="form.address_line_one"
                  :rules="validationRuls" 
                />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input 
                  filled 
                  label="Middle Name" 
                  style="" 
                  v-model="form.middle_name"
                  :rules="validationRuls"
                />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input 
                  filled 
                  label="Address Line 2" 
                  v-model="form.address_line_two"
                  :rules="validationRuls" 
                />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input 
                  filled 
                  label="Last Name" 
                  v-model="form.last_name"
                  :rules="validationRuls" 
                />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input 
                  filled 
                  label="City" 
                  v-model="form.city" 
                  :rules="validationRuls" 
                />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input 
                  filled 
                  label="Email" 
                  v-model="form.email" 
                  :rules="validationRuls" 
                />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-select 
                  filled 
                  v-model="form.select_state" 
                  :options="options" 
                  label="Select State" 
                  behavior="menu"
                  :rules="validationRuls" 
                />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input 
                  filled 
                  v-model="form.phone" 
                  label="Phone" 
                  :rules="validationRuls" 
                />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input 
                  filled 
                  type="number" 
                  label="Postel Code" 
                  v-model="form.postel_code"
                  :rules="validationRuls"
                />
              </div>
              <div class="col-12">
                <q-btn 
                  label="Add Customer" 
                  color="primary" 
                  icon="add" 
                  v-if="addButton"
                  class="text-subtitle1 full-width"
                  @click="addRecord" 
                />
                <q-btn
                  label="update"
                  icon="update"
                  v-if="updateButton"
                  color="secondary"
                  class="text-subtitle1 full-width"
                  @click="updateRecord"
                />
              </div>
              <div class="col-12">
                <q-btn 
                  label="Reset" 
                  color="red-10" 
                  icon="backspace" 
                  class="q-ml-sm text-subtitle1 full-width"
                  @click="resetForm" 
                />
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="text-right q-mt-md q-mr-xs">
      <q-btn 
        label="ADD CUSTOMER" 
        color="green" 
        icon="add" 
        to="/add-customer" 
        class="text-subtitle1" 
      />
    </div>

    <DataTable 
      :title="tableTitle" 
      :columns="tableColumns" 
      :rows="customerArray" 
      :buttons="buttons"
      @deleteRecord="deleteRecord"
      @editRecord="editRecord"
    />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue'
import DataTable from "components/DataTable.vue";
import { LocalStorage } from 'quasar';
const tableColumns = [
  {
    name: 'calories',
    align: 'left',
    label: 'Name',
    field: 'first_name',
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
    label: 'Phone',
    field: 'phone',
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
let customerArray = JSON.parse(LocalStorage.getItem('customer')) ?? []
const buttons = [
  {
    icon: 'edit',
    color: 'primary',
    event: 'editRecord'
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
  },
  {
    icon: 'delete',
    color: 'red-10',
    event: 'deleteRecord'
  }
]
export default defineComponent({
  name: 'Customers',
  components: {
    DataTable
  },
  data() {
    return {
      tableTitle: 'Customers',
      tableColumns,
      customerArray,
      buttons,
      dialog: ref(false),
      model: ref(null),
      editId: null,
      validationRuls: [val => !!val || 'Please Type Somethings'],
      options: ['Lahore', 'Kusar', 'Kangan pur', 'Okara', 'Swat'],
      addButton: true,
      updateButton: false,
      form: {
        first_name: '',
        address_line_one: '',
        middle_name: '',
        address_line_two: '',
        last_name: '',
        city: '',
        email: '',
        select_state: '',
        phone: '',
        postel_code: ''
      }
    }
  },
  methods: {
    clearForm() {
      this.form.first_name = null
      this.form.address_line_one = null
      this.form.middle_name = null
      this.form.address_line_two = null
      this.form.last_name = null
      this.form.city = null
      this.form.email = null
      this.form.select_state = null
      this.form.phone = null
      this.form.postel_code = null
    },
    addRecord() {
      let obj = {
        first_name: this.form.first_name,
        address_line_one: this.form.address_line_one,
        middle_name: this.form.middle_name,
        address_line_two: this.form.address_line_two,
        last_name: this.form.last_name,
        city: this.form.city,
        email: this.form.email,
        select_state: this.form.select_state,
        phone: this.form.phone,
        postel_code: this.form.postel_code
      }
      console.log(obj)
      this.customerArray.push(obj)
      this.clearForm()
      this.dialog = ref(false)
      if (LocalStorage.getItem('customer') !== null) {
        LocalStorage.set('customer', JSON.stringify(this.customerArray))
      } else {
        LocalStorage.set('customer', JSON.stringify(this.customerArray))
      }
    },
    deleteRecord(i) {
      this.customerArray.splice(i, 1)
      LocalStorage.set('customer', JSON.stringify(this.customerArray))
    },
    editRecord(i) {
      console.log(i)
      this.dialog = ref(true)
      this.addButton = false
      this.updateButton = true
      this.editId = i
      this.form.first_name = customerArray[i].first_name
      this.form.address_line_one = customerArray[i].address_line_one
      this.form.middle_name = customerArray[i].middle_name
      this.form.address_line_two = customerArray[i].address_line_two
      this.form.last_name = customerArray[i].last_name
      this.form.city = customerArray[i].city
      this.form.email = customerArray[i].email
      this.form.select_state = customerArray[i].select_state
      this.form.phone = customerArray[i].phone
      this.form.postel_code = customerArray[i].postel_code
    },
    updateRecord() {
      this.updateButton = false
      this.addButton = true
      let obj = {
        first_name: this.form.first_name,
        address_line_one: this.form.address_line_one,
        middle_name: this.form.middle_name,
        address_line_two: this.form.address_line_two,
        last_name: this.form.last_name,
        city: this.form.city,
        email: this.form.email,
        select_state: this.form.select_state,
        phone: this.form.phone,
        postel_code: this.form.postel_code
      }
      this.customerArray[this.editId] = obj
      LocalStorage.set('customer', JSON.stringify(this.customerArray))
      this.dialog = ref(false)
      this.clearForm()
    }
  }
})
</script>

<style scoped>
.input-margin {
  margin-top: -13px
}
</style>

