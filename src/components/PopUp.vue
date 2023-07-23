<template>
  <q-dialog v-model="model">
    <q-card>
      <q-card-section class="row">
        <div 
          v-for="action in actions"
          v-bind="action"
          :key="action.label"
          class="col-12"
        >
          <q-btn
            :color="action.color"
            :label="action.label"
            :icon="action.icon"
            :data-event="action.event"
            class="full-width q-py-md q-mt-md"
            @click="$emit('emittedEvent', action.event)"
          />
        </div>
      </q-card-section>
      <q-card-section align="right">
        <q-btn class="full-width q-py-md" label="Cancel" icon="cancel" color="primary" @click="$emit('close')" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Popup',
  props: {
    actions: {
      type: Array,
    },
    dialogOpen: Boolean
  },
  computed: {
    model() {
      return this.dialogOpen;
    }
  }
}
</script>


