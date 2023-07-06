<template>
  <q-page padding>
    <!-- content -->

    <q-btn label="Close Icon" color="primary" @click="icon = true" />

    <q-dialog v-model="icon" persistent>
      <!--      <q-card>-->
      <!--        <q-card-section class="row items-center q-pb-none">-->
      <!--          <div class="text-h6">Add Customer</div>-->
      <!--          <q-space />-->
      <!--          <q-btn icon="close" flat round dense v-close-popup />-->
      <!--        </q-card-section>-->
      <!--        <q-card-section>-->
      <!--          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.-->
      <!--        </q-card-section>-->
      <!--      </q-card>-->
      <q-card>
        <q-toolbar elevated class="bg-primary text-white">
          <q-toolbar-title>Add Customer</q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>
        <q-card-section>
          <q-form>
            <div class="row q-col-gutter-md q-mt-xs">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <q-input filled label="First Name" v-model="form.first_name"
                  :rules="[val => !!val || 'Please Type Somethings']" />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <q-input filled label="Address Line 1" v-model="form.address_line_one"
                  :rules="[val => !!val || 'Please Type Somethings']" />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input filled label="Middle Name" style="" v-model="form.middle_name"
                  :rules="[val => !!val || 'Please Type Somethings']" />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input filled label="Address Line 2" v-model="form.address_line_two"
                  :rules="[val => !!val || 'Please Type Somethings']" />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input filled label="Last Name" v-model="form.last_name"
                  :rules="[val => !!val || 'Please Type Somethings']" />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input filled label="City" v-model="form.city" :rules="[val => !!val || 'Please Type Somethings']" />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input filled label="Email" v-model="form.email" :rules="[val => !!val || 'Please Type SomeThings']" />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-select filled v-model="form.select_state" :options="options" label="Select State" behavior="menu"
                  :rules="[val => !!val || 'Please Type Somethings']" />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input filled v-model="form.phone" label="Phone" :rules="[val => !!val || 'Please Type Somethings']" />
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
                <q-input filled type="number" label="Postel Code" v-model="form.postel_code"
                  :rules="[val => !!val && val.length > 0 || 'Please Type Somethings']" />
              </div>
              <div class="col-12">
                <q-btn label="Add Customer" color="primary" icon="add" class="text-subtitle1 full-width"
                  @click="addRecord" />
              </div>
              <div class="col-12">
                <q-btn label="Reset" color="red-10" icon="backspace" class="q-ml-sm text-subtitle1 full-width"
                  @click="resetForm" />
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="text-right q-mt-md q-mr-xs">
      <q-btn label="ADD CUSTOMER" color="green" icon="add" to="/add-customer" class="text-subtitle1" />
    </div>

    <DataTable :title="tableTitle" :columns="tableColumns" :rows="tableRows" :buttons="tableButtons" />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue'
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
export const customerArray = [
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
  {
    name: 'Frozen Yogurt',
    email: 'FrozenYogurt@gmail.com',
    phone: '0300-5858183',
  },
]
const buttons = [
  {
    icon: 'edit',
    color: 'primary',
    event: ''
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
      tableColumns: columns,
      tableRows: customerArray,
      tableButtons: buttons,
      icon: ref(false),
      model: ref(null),
      options: ['Lahore', 'Kusar', 'Kangan pur', 'Okara', 'Swat'],
      form: {
        first_name: null,
        address_line_one: null,
        middle_name: null,
        address_line_two: null,
        last_name: null,
        city: null,
        email: null,
        select_state: null,
        phone: null,
        postel_code: null
      }
    }
  },
  methods: {
    resetForm() {
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
      this.$router.push({ path: '/customer' })
    }
  }
})
</script>

<style scoped>
.input-margin {
  margin-top: -13px
}
</style>

