<template>
  <q-page padding>
    <!-- content -->
    Setting Page

    <div>
      <q-btn
        label="Go Dashboard"
        icon="chevron_left"
        color="primary"
        class="q-mt-lg text-subtitle1"
        to="/"
      />
      <div class="q-my-md text-h6">
        Update Setting
      </div>
    </div>

    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6" v-for="input in fields" :key="input">
        <q-input
          name="name"
          v-model="input.model"
          color="primary"
          :label="input.label"
          filled
          clearable
          class="input-margin"
          :rules="[val => val || 'Please Type Somethings']"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-select
          filled
          v-model="model"
          :options="options"
          label="Select State"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 input-margin">
        <q-select
          filled
          v-model="model"
          :options="options"
          label="Select Country"
        />
      </div>
    </div>

    <div class="row text-center q-mt-md">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mt-md">
        <q-btn
          label="UPDATE SETTINGS"
          color="green"
          class="q-pa-md width_button text-subtitle1"
          icon="group"
        />
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-mt-md q-mb-xl">
        <q-btn
          label="CANCEL"
          color="negative"
          class="q-pa-md width_button text-subtitle1"
          icon="cancel"
        />
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent,ref } from 'vue';

export default defineComponent({
  name: 'Setting',
  data() {
    return {
      fields: [
        {
          label: "Company Name",
          model: ""
        },
        {
          label: "Address Name",
          model: ""
        },
        {
          label: "Email",
          model: ""
        },
        {
          label: "Address Line 2",
          model: ""
        },
        {
          label: "Phone",
          model: ""
        },
        {
          label: "City",
          model: ""
        },
        {
          label: "Fax",
          model: ""
        },
        {
          label: "Postal Code",
          model: ""
        },
      ],
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      model: ref(null),
      // options: [
      //   'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      // ];
      left: ref(true),
      right: ref(false),
      left2: ref(true),
      right2: ref(false)
    }
  },
})
</script>

<style scoped>
.width_button {
  width: 300px
}
.input-margin {
  margin-top: -13px
}
</style>

