  <template>
    <q-page
      class="row justify-center items-center"
    >
      <div class="column q-pa-lg">
        <div class="row">
          <q-card square class="shadow-5" style="width:400px;height:585px;">
            <q-card-section class="bg-primary">
              <div class="text-h4 text-white q-my-md text-center">Login</div>
            </q-card-section>
            <q-card-section>
              <q-form class="q-px-sm q-pt-md">
                <q-input filled clearable v-model="email" type="email" label="Email">
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                </q-input>
                <q-input filled class="q-mt-md" clearable v-model="password" type="password" label="Password">
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>
                </q-input>
              </q-form>
            </q-card-section>
            <q-card-section>
              <div class="text-center q-gutter-md">
                <q-btn icon="g_translate" label="countine With Google" color="cyan-10"/>
                <q-btn icon="facebook" label="countine With Facebook" color="cyan-10"/>
                <q-btn icon="swipe_up" label="countine With Apple" color="cyan-10"/>
              </div>
            </q-card-section>
            <q-card-actions class="q-px-lg">
              <q-btn unelevated size="lg" color="primary" class="full-width text-white" label="Login" />
            </q-card-actions>
            <q-card-section class="text-center q-pa-sm">
              <p class="text-grey-6">Forgot your password?</p>
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

