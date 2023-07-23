
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: '/customer', component: () => import('pages/Customer.vue') },
      { path: '/vehicles', component: () => import('pages/Vehicles.vue') },
      { path: '/orders', component: () => import('pages/Orders.vue') },
      { path: '/expenses', component: () => import('pages/Expenses.vue') },
      { path: '/employees', component: () => import('pages/Employees.vue') },
      { path: '/location', component: () => import('pages/Locations.vue') },
      { path: '/sales-report', component: () => import('pages/SalesReport.vue') },
      { path: '/general-expense-report', component: () => import('pages/GeneralExpenseReport.vue') },
      { path: '/order-expense-report', component: () => import('pages/OrderExpenseReport.vue') },
      { path: '/tax-report', component: () => import('pages/TaxReport.vue') },
      { path: '/setting', component: () => import('pages/Setting.vue') },
      { path: '/billing', component: () => import('pages/Billing.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/add-customer', component: () => import('pages/AddCustomer.vue') },
      { path: '/add-vehicle', component: () => import('pages/AddVehicle.vue') },
      { path: '/edit-vehicle/:index', component: () => import('pages/AddVehicle.vue') },
      { path: '/add-order', component: () => import('pages/AddOrder.vue') },
      { path: '/add-expense', component: () => import('pages/AddExpense.vue') },
      { path: '/add-employ', component: () => import('pages/AddEmploy.vue') },
      { path: '/add-location', component: () => import('pages/AddLocation.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

