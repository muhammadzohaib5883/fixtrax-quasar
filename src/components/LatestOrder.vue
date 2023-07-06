<template>
  <div class="row q-col-gutter-md q-mt-sm q-mb-lg">
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
      <q-table
        flat bordered
        title="Latest Open Orders"
        :rows="rows"
        :columns="columns"
        no-data-label="I didn't find anything for you"
        row-key="name"
        class="shadow-3"
      />
      <div>
        <q-btn
          label='View All "Open Orders"'
          class="q-mt-md full-width text-subtitle1"
          icon="touch_app"
          flat
          to="/orders"
        />
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
      <q-table
        flat bordered
        title="Latest Closed Orders"
        :rows="rows"
        :columns="columns"
        no-data-label="I didn't find anything for you"
        row-key="name"
        class="shadow-3"
      />
      <div>
        <q-btn
          label='Close All "Closed Orders"'
          class="q-mt-md full-width text-subtitle1"
          icon="touch_app"
          flat
          to="/orders"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LatestOrder',
  data () {
    return {
      rows: [],
      columns: [
        {
          name: 'calories',
          align: 'center',
          label: 'Orders#',
          field: 'order',
          sortable: true
        },
        {
          name: 'calories',
          align: 'center',
          label: 'Name',
          field: 'name',
          sortable: true
        },
        {
          name: 'calories',
          align: 'center',
          label: 'Balance',
          field: 'balance',
          sortable: true
        },
      ],
    }
  }
}
</script>
