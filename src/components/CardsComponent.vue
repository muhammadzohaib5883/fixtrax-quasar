<template>
  <div class="text-h4 q-pl-lg q-pt-sm">
    Dashboard
  </div>
  <q-separator
    color="grey-4"
    class="hr"
  />
  <div class="row q-col-gutter-sm q-mt-sm">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-lg-3" v-for="box in boxes">
      <q-card
        :class="box.bg_color"
        class="my-card text-white q-mt-xs shadow-3"
      >
        <q-card-section>
          <div class="row">
            <div class="col-6">
              <q-icon :name="box.icon" size="75px" />
            </div>
            <div class="col-6 text-right">
              <div class="text-h3">
                {{ box.number }}
              </div>
              <div>
                {{ box.text  }}
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-btn :to="box.url" flat class="full-width text-subtitle1">
            <div class="row full-width">
              <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 q-pr-xl">
                VIEW Detail
              </div>
              <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-right">
                <q-icon name="arrow_right" />
              </div>
            </div>
          </q-btn>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentName',
  setup() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      boxes: [
        {
          bg_color: "bg-blue-7",
          icon: "directions_car",
          number: "19",
          text: "Vehicles",
          url: "/vehicles"
        },
        {
          bg_color: "bg-green-6",
          icon: "shopping_cart",
          number: "34",
          text: "Open Orders",
          url: "/orders"
        },
        {
          bg_color: "bg-amber-9",
          icon: "group",
          number: "15",
          text: "Total Customers",
          url: "/customer"
        },
        {
          bg_color: "bg-deep-orange-14",
          icon: "notification_important",
          number: "0",
          text: "Today's Orders",
          url: "/orders"
        },
      ]
    }
  }
}
</script>

<style scoped>
.hr {
  width: 95%;
  margin: auto;
}
</style>
