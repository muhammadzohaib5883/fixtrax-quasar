<template>
  <q-page padding>
    <!-- content -->

    <div class="q-mt-lg">
      <q-btn
        to="/vehicles"
        color="primary"
        label="Go Back"
        icon="chevron_left"
        class="text-subtitle1"
      />
    </div>
    <div class="text-h4 q-mt-md">
      Add Vehicles
    </div>
    <div class="row q-col-gutter-md q-mt-xs">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <q-select
          filled
          v-model="form.select_customer"
          :options="selectCustomer"
          label="Select Customer"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <q-select
          filled
          disable
          float-label="Disabled Select"
          v-model="form.select_trim"
          :options="options"
          label="Select Trim"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="VIN (17 Characters)"
          v-model="form.vin"
          :rules="[val => !!val || 'Please Type Somethings']"
        >
          <template v-slot:append>
            <q-icon
              name="camera"
              color="primary"
            />
          </template>
        </q-input>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-select
          filled
          disable
          float-label="Disabled Select"
          v-model="form.select_engine"
          :options="options"
          label="Select Engine"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-select
          filled
          v-model="form.select_year"
          :options="selectYear"
          label="Select Year"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="color"
          v-model="form.city"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-select
          filled
          disable
          float-label="Disabled Select"
          v-model="form.select_make"
          :options="options"
          label="Select Make"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          v-model="form.license_plate_number"
          label="License Plate Number"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-select
          filled
          disable
          float-label="Disabled Select"
          v-model="form.select_model"
          :options="options"
          label="Select Model"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-select
          filled
          v-model="form.select_province"
          :options="selectProvince"
          label="Select Province"
          :rules="[val => !!val || 'Please Type Somethings']"
        >
        </q-select>
      </div>
      <div class="input-margin q-mb-lg">
        <q-btn
          label="Add Vehicles"
          color="primary"
          icon="add"
          class="text-subtitle1"
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

  </q-page>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'AddVehicle',
  data() {
    return {
      model: ref(null),
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      selectCustomer: ['Amer Ch', 'Abdul Waheed', 'Ch Muhammad Zohaib', 'Haris', 'usman'],
      selectProvince: ['Lahore', 'Swat', 'Kusar', 'Kangan Pur', 'Okara'],
      selectYear: [2015, 2016, 2017, 2018],
      form: {
        select_customer: null,
        select_trim: null,
        vin: null,
        select_engine: null,
        select_year: null,
        city: null,
        select_make: null,
        license_plate_number: null,
        select_model: null,
        select_province: null
      }
    }
  },
  methods: {
    resetForm() {
      this.form.select_customer = null
      this.form.select_trim = null
      this.form.vin = null
      this.form.select_engine = null
      this.form.select_year = null
      this.form.city = null
      this.form.select_make = null
      this.form.license_plate_number = null
      this.form.select_model = null
      this.form.select_province = null
    }
  }
}
</script>

<style scoped>
.input-margin {
  margin-top: -13px
}
</style>
