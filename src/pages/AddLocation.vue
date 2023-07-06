<template>
  <q-page padding>
    <!-- content -->

    <div class="q-mt-xs">
      <q-btn
        to="/location"
        color="primary"
        label="Go Back"
        icon="chevron_left"
        class="text-subtitle1"
      />
    </div>
    <div class="text-h4 q-mt-md">
      Add Location
    </div>
    <div class="row q-col-gutter-md q-mt-xs">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <q-input
          filled
          label="name"
          v-model="form.location_name"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
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
          label="Phone"
          v-model="form.phone"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="city"
          v-model="form.city"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="Fix"
          v-model="form.fix"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-select
          filled
          v-model="form.select_state"
          :options="selectState"
          label="Select State"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="Tax"
          v-model="form.tax"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="Postal Code"
          v-model="form.postal_code"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="Address"
          v-model="form.address"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-12 input-margin">
        <q-btn
          label="Add Location"
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
export default {
  name: 'AddLocation',
  data() {
    return {
      selectState: ['Lahore', 'kusar', 'Kangan Pur', 'Okara'],
      form: {
        location_name: null,
        address_line_two: null,
        phone: null,
        city: null,
        fix: null,
        select_state: null,
        tax: null,
        postal_code: null,
        address: null
      }
    }
  },
  methods: {
    resetForm() {
      this.form.location_name = null
      this.form.address_line_two = null
      this.form.phone = null
      this.form.city = null
      this.form.fix = null
      this.form.select_state = null
      this.form.tax = null
      this.form.postal_code = null
      this.form.address = null
    }
  }
}
</script>

<style scoped>
.input-margin {
  margin-top: -13px
}
</style>
