import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/',
    component: () => import('../views/front/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'booking',
        name: 'booking',
        component: () => import('../views/front/BookingView.vue')
      },
      {
        path: 'confirm',
        name: 'orderConfirm',
        component: () => import('../views/front/OrderConfirm.vue')
      },
      {
        path: 'create',
        name: 'orderCreate',
        component: () => import('../views/front/OrderCreate.vue')
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('../views/front/CouponView.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/dashboard/DashboardView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/The404View.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
