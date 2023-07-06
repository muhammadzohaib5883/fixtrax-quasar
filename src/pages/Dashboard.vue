<template>
  <q-page class="q-pa-md">
    <!-- content -->

    <CardsComponent />
    <ChartComponent />
    <LatestOrder />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import CardsComponent from 'src/components/CardsComponent.vue';
import ChartComponent from 'src/components/ChartComponent.vue';
import LatestOrder from 'src/components/LatestOrder.vue';
export default defineComponent({
  name: "Dashboard",
  components: {
    CardsComponent,
    ChartComponent,
    LatestOrder
  },
  data() {
    return {
      
    }
  }
})
</script>
