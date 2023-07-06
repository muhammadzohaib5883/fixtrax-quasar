<template>
  <q-page padding>
    <!-- content -->

    <div class="q-mt-lg">
      <q-btn
        to="/orders"
        color="primary"
        label="Go Back"
        icon="chevron_left"
        class="text-subtitle1"
      />
    </div>
    <div class="text-h4 q-mt-md">
      Add Order
    </div>
    <div class="row q-col-gutter-md q-mt-xs">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <q-select
          filled
          v-model="form.select_vehicle"
          :options="selectVehicle"
          label="Select Vehicles"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <q-select
          filled
          v-model="form.select_location"
          :options="selectLocation"
          label="Select Locations"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="Sales Person"
          v-model="form.sales_person"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="Mechanic"
          v-model="form.mechanic"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="Description"
          v-model="form.description"
          :rules="[val => !!val || 'Please Type SomeTthings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="Mileage"
          v-model="form.mileage"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="input-margin">
        <q-btn
          label="Add Order"
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
  name: 'AddOrder',
  data() {
    return {
      selectVehicle: ['toyota corolla', 'honda city', 'land cruiser V8', 'prado'],
      selectLocation: ['Lahor', 'Swat', 'Kusar', 'Kangan Pur', 'Okara'],
      form: {
        select_vehicle: null,
        select_location: null,
        sales_person: null,
        mechanic: null,
        description: null,
        mileage: null
      }
    }
  },
  methods: {
    resetForm() {
      this.form.select_vehicle = null
      this.form.select_location = null
      this.form.sales_person = null
      this.form.mechanic = null
      this.form.description = null
      this.form.mileage = null
    }
  }
}
</script>

<style scoped>
.input-margin {
  margin-top: -13px
}
</style>
