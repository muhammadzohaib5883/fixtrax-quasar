<template>
  <div>
    <q-table
      flat bordered
      :title="title"
      :rows="rows"
      :columns="columns"
      row-key="index"
      virtual-scroll
      v-model:pagination="pagination"
      :rows-per-page-options="[0]"
      class="q-mt-md"
      :separator="separator"
      :grid="$q.screen.lt.md ? true : false"
      :card-class="$q.screen.lt.md ? 'bg-primary text-white' : ''"
      :class="$q.screen.gt.md ? 'shadow-2' : ''"
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn
            v-for="button in buttons"
            :key="button.event"
            @click="button.event"
            :icon="button.icon"
            :color="button.color"
            class="q-px-sm q-ml-xs"
          />
        </q-td>
      </template>
      <template v-slot:top-right>
        <q-input dense outlined v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    title: {
      type: String,
    },
    columns: {
      type: Array
    },
    rows: {
      type: Array
    },
    buttons: {
      type: Array
    },
  },
  data() {
    return {
      separator: ref('vertical'),
      pagination: ref({
        rowsPerPage: [10]
      }),
    }
  }
}
</script>

<style scoped>
</style>
