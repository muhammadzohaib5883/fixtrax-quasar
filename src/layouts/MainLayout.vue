<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="shadow-0"
        />

        <q-toolbar-title>
          <div class="q-pl-sm">
           Fixtrax
          </div>
        </q-toolbar-title>

        <q-btn
          icon="lock"
          class="bg-red q-px-md q-py-sm rounded-borders"
          style="font-size: 13px"
        />
      </q-toolbar>
    </q-header>

    <q-drawer class="text-subtitle1" v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Fixtrax Application
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    // class: 'text-subtitle1',
    title: 'Dashboard',
    // caption: 'quasar.dev',
    icon: 'dashboard',
    link: '/'
  },
  {
    title: 'Customers',
    // caption: 'github.com/quasarframework',
    icon: 'group',
    link: '/customer',
  },
  {
    title: 'Vehicles',
    // caption: 'chat.quasar.dev',
    icon: 'directions_car',
    link: '/vehicles'
  },
  {
    title: 'Orders',
    // caption: 'forum.quasar.dev',
    icon: 'shopping_cart',
    link: '/orders'
  },
  {
    title: 'Manage',
    disable: true,
    // caption: '@quasarframework',
    icon: 'leaderboard',
    // link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Expense',
    // caption: '@QuasarFramework',
    icon: 'library_books',
    link: '/expenses'
  },
  {
    title: 'Employees',
    // caption: 'Community Quasar projects',
    icon: 'group',
    link: '/employees'
  },
  {
    title: 'Locations',
    // caption: 'Community Quasar projects',
    icon: 'location_on',
    link: '/location'
  },
  {
    title: 'Reports',
    disable: true,
    // caption: 'Community Quasar projects',
    icon: 'report',
    // link: '/sales_report'
  },
  {
    title: 'Sales Report',
    // caption: 'Community Quasar projects',
    icon: 'data_usage',
    link: '/sales-report'
  },
  {
    title: 'General Expense Report',
    // caption: 'Community Quasar projects',
    icon: 'data_usage',
    link: '/general-expense-report'
  },
  {
    title: 'Order Expense Report',
    // caption: 'Community Quasar projects',
    icon: 'data_usage',
    link: '/order-expense-report'
  },
  {
    title: 'Text Report',
    // caption: 'Community Quasar projects',
    icon: 'data_usage',
    link: '/tax-report'
  },
  {
    title: 'SMS Log Report',
    disable: true,
    // caption: 'Community Quasar projects',
    icon: 'data_usage',
    // link: 'https://awesome.quasar.dev'
  },
  {
    title: 'FixTrax',
    disable: true,
    // caption: 'Community Quasar projects',
    icon: 'park',
    // link: 'https://awesome.quasar.dev'
  },
  {
    title: 'Setting',
    // caption: 'Community Quasar projects',
    icon: 'settings',
    link: '/setting'
  },
  {
    title: 'Billing',
    // caption: 'Community Quasar projects',
    icon: 'attach_money',
    link: '/billing'
  },
  {
    title: 'Register',
    icon: 'how_to_reg',
    link: '/register',
  },
  {
    title: 'Login',
    icon: 'login',
    link: '/login'
  },
  {
    title: 'Logout',
    disable: true,
    // caption: 'Community Quasar projects',
    icon: 'lock',
    // link: 'https://awesome.quasar.dev'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
