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
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: 'Curry Planet'
        }
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/front/ProductsView.vue'),
        meta: {
          title: '商品列表｜Curry Planet'
        }
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/front/ProductView.vue'),
        meta: {
          title: '商品細節｜Curry Planet'
        }
      },
      {
        path: 'booking',
        name: 'booking',
        component: () => import('../views/front/BookingView.vue'),
        meta: {
          title: '訂位頁面｜Curry Planet'
        }
      },
      {
        path: 'create',
        name: 'orderCreate',
        component: () => import('../views/front/OrderCreate.vue'),
        meta: {
          title: '建立訂單｜Curry Planet'
        }
      },
      {
        path: 'confirm',
        name: 'orderConfirm',
        component: () => import('../views/front/OrderConfirm.vue'),
        meta: {
          title: '完成訂單｜Curry Planet'
        }
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
    component: () => import('../views/admin/DashboardView.vue'),
    redirect: '/admin/products',
    children: [
      {
        path: 'products',
        name: 'adminProducts',
        component: () => import('../views/admin/ProductsView.vue'),
        meta: {
          title: '後台商品管理｜Curry Planet'
        }
      },
      {
        path: 'booking',
        name: 'adminBooking',
        component: () => import('../views/admin/BookingView.vue'),
        meta: {
          title: '後台訂位管理｜Curry Planet'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      title: '後台登入｜Curry Planet'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/The404View.vue'),
    meta: {
      title: '404 Not Found｜Curry Planet'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
