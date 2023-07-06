<template>
  <q-page padding>
    <!-- content -->

    <div class="q-mt-lg">
      <q-btn
        to="/employees"
        color="primary"
        label="Go Back"
        icon="chevron_left"
        class="text-subtitle1"
      />
    </div>
    <div class="text-h4 q-mt-md">
      Add Employ
    </div>
    <div class="row q-col-gutter-md q-mt-xs">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="First Name"
          v-model="form.first_name"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
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
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-select
          filled
          v-model="form.select_state"
          :options="form.selectState"
          label="Select State"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="Password"
          v-model="form.password"
          type="password"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="Postel Code"
          v-model="form.postel_code"
          type="number"
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
        <q-select
          filled
          v-model="form.select_location"
          :options="selectLocation"
          label="Select Location"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-select
          filled
          v-model="form.select_user_type"
          :options="selectUserType"
          label="Select User Type"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-12 input-margin">
        <q-btn
          label="Add Employ"
          color="primary"
          icon="add"
          class="q-mb-lg text-subtitle1"
        />
        <q-btn
          label="Reset"
          color="red-10"
          icon="backspace"
          class="q-ml-sm q-mb-lg text-subtitle1"
          @click="resetForm"
        />
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'AddEmploy',
  data() {
    return {
      selectState: ['Lahore', 'Kusar', 'Okara', 'Kangan Pur', 'Swat'],
      selectLocation: ['islamabad', 'faisalabad', 'Swat'],
      selectUserType: ['Admin', 'user'],
      form: {
        first_name: null,
        address_line_one: null,
        middle_name: null,
        address_line_two: null,
        last_name: null,
        city: null,
        email: null,
        select_state: null,
        password: null,
        postel_code: null,
        phone: null,
        select_location: null,
        select_user_type: null
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
      this.form.postel_code = null
      this.form.phone = null
      this.form.select_location = null
      this.form.select_user_type = null
    }
  }
}
</script>

<style scoped>
.input-margin {
  margin-top: -13px
}
</style>
