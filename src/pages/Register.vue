<template>
    <q-page
      class="row justify-center items-center"
    >
      <div class="">
        <div class="row">
          <q-card square class="shadow-5" style="width:400px; height:485px;">
            <q-card-section class="bg-primary">
              <div class="text-h4 text-center text-white q-my-md">Registration</div>
            </q-card-section>
            <q-card-section>
              <q-form class="q-px-sm q-pt-md q-pb-lg">
                <q-input filled clearable v-model="username" type="username" label="Name">
                  <template v-slot:prepend>
                    <q-icon name="person" />
                  </template>
                </q-input>
                <q-input filled clearable v-model="email" type="email" label="Email" class="q-mt-md">
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                <q-input filled clearable v-model="password" type="password" label="Password" class="q-mt-md">
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                </q-input>
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-lg">
              <q-btn unelevated size="lg" color="primary" class="full-width text-white" label="Regiater" />
            </q-card-actions>
            <q-card-section class="text-center q-pa-sm">
              <p class="text-grey-6">Return to login</p>
            </q-card-section>
          </q-card>
        </div>
      </div>

    </q-page>
  </template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      username: '',
      password: ''
    }
  }
}
</script>


