<template>
  <q-page padding>
    <!-- content -->

    <div class="q-mt-lg">
      <q-btn
        to="/expenses"
        color="primary"
        label="Go Back"
        icon="chevron_left"
        class="text-subtitle1"
      />
    </div>
    <div class="text-h4 q-mt-md">
      Add Expenses
    </div>
    <div class="row q-col-gutter-md q-mt-xs">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="Description"
          v-model="form.description"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          filled
          label="Amount"
          v-model="form.amount"
          :rules="[val => !!val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-input
          v-model="form.date"
          filled
          type="date"
          hint="Native date"
          :rules="[val => !!val || 'Please Type SomeThings']"
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
      <div class="input-margin">
        <q-btn
          label="Add Expenses"
          color="primary"
          icon="add"
          class="q-mt-sm text-subtitle1"
        />
        <q-btn
          label="Reset"
          color="red-10"
          icon="backspace"
          class="q-ml-sm q-mt-sm text-subtitle1"
          @click="resetForm"
        />
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'AddExpense',
  data() {
    return {
      selectLocation: ['Lahore', 'kusar', 'Kangan Pur', 'Okara', 'Swat'],
      form: {
        description: null,
        amount: null,
        date: null,
        select_location: null
      }
    }
  },
  methods: {
    resetForm() {
      this.form.description = null
      this.form.amount = null
      this.form.date = null
      this.form.select_location = null
    }
  }
}
</script>

<style scoped>
.input-margin {
  margin-top: -13px
}
</style>
