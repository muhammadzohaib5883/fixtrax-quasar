<template>
  <q-page padding>
    <!-- content -->

    <div class="q-mt-lg">
      <q-btn
        to="/customer"
        color="primary"
        label="Go Back"
        icon="chevron_left"
        class="text-subtitle1"
      />
    </div>
    <div class="text-h4 q-mt-md">
      Add Customer
    </div>
    <q-form>
      <div class="row q-col-gutter-md q-mt-xs">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <q-input
            filled
            label="First Name"
            v-model="form.first_name"
            :rules="[val => !!val || 'Please Type Somethings']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <q-input
            filled
            label="Address Line 1"
            v-model="form.address_line_one"
            :rules="[val => !!val || 'Please Type Somethings']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
          <q-input
            filled
            label="Middle Name"
            style=""
            v-model="form.middle_name"
            :rules="[val => !!val || 'Please Type Somethings']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
          <q-input
            filled
            label="Address Line 2"
            v-model="form.address_line_two"
            :rules="[val => !!val || 'Please Type Somethings']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
          <q-input
            filled
            label="Last Name"
            v-model="form.last_name"
            :rules="[val => !!val || 'Please Type Somethings']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
          <q-input
            filled
            label="City"
            v-model="form.city"
            :rules="[val => !!val || 'Please Type Somethings']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
          <q-input
            filled
            label="Email"
            v-model="form.email"
            :rules="[val => !!val || 'Please Type SomeThings']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
          <q-select
            filled
            v-model="form.select_state"
            :options="options"
            label="Select State"
            :rules="[val => !!val || 'Please Type Somethings']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
          <q-input
            filled
            v-model="form.phone"
            label="Phone"
            :rules="[val => !!val || 'Please Type Somethings']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
          <q-input
            filled
            type="number"
            label="Postel Code"
            v-model="form.postel_code"
            :rules="[val => !!val && val.length > 0 || 'Please Type Somethings']"
          />
        </div>
        <div class="input-margin q-mb-lg">
          <q-btn
            label="Add Customer"
            color="primary"
            icon="add"
            class="text-subtitle1"
            @click="addRecord"
          />
          <q-btn
            label="Reset"
            color="red-10"
            icon="backspace"
            class="q-ml-sm text-subtitle1"
            @click="resetForm"
          />
        </div>
      </div>
    </q-form>

  </q-page>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'AddCustomer',
  data() {
    return {
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
};
</script>

<style scoped>
  .input-margin {
    margin-top: -13px
  }
</style>
