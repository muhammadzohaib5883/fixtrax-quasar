<template>
  <div class="shadow-3 q-mt-lg q-pa-sm">
    <apexchart
      type="line"
      height="230px"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
const sales = [
  0, 0, 0, 0, 0, 500, 0, 0, 0, 0, 0, 0
]

const expenses = [
  0, 0, 3000, 0, 0, 50000, 0, 0, 0, 0, 0, 0
]

export default {
  name: 'ApexLineColumn',
  data () {
    return {
      series: [
        {
          name: 'Sales',
          type: 'column',
          data: sales
        },
        {
          name: 'General Expenses',
          type: 'line',
          data: expenses
        }
      ],
      chartOptions: {
        title: {
          text: 'Line & Column',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        stroke: {
          width: [0, 4]
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        legend: {
          labels: {
            colors: 'black'
          }
        },
        xaxis: {
          type: 'text',
          labels: {
            style: {
              colors: 'black'
            }
          }
        },
        yaxis: [{
          title: {
            text: 'Sales',
            style: {
              color: '#FFF'
            }
          },
          labels: {
            style: {
              colors: '#fff'
            },
            formatter: function (value) {
              return '$' + value
            }
          }

        }, {
          opposite: true,
          labels: {
            style: {
              colors: '#fff'
            },
            formatter: function (value) {
              return '$' + value
            }
          },
          title: {
            text: 'General Expense',
            style: {
              color: '#FFF'
            }
          }
        }]
      }
    }

  }
}
</script>
