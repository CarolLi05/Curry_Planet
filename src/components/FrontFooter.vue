<template>
  <footer class="footer bg-dark text-light">
    <div class="container-fluid">
      <div class="d-flex justify-content-between p-8">
        <div class="d-flex justify-content-center align-item-center">
          <img src="../assets/images/Logo-circle.svg" alt="" class="logo w-50">
        </div>
        <div class="d-flex justify-content-between">
          <ul class="list-unstyled">
            <li class="mb-2">
              <router-link to="/about">關於我們</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/products">菜單底加</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/booking">預訂位子</router-link>
            </li>
            <li class="mb-2">
              <router-link to="/contact">聯絡我們</router-link>
            </li>
          </ul>
          <div class="footer-right">
            <div class="d-flex justify-content-between">
              <div class="footer-info">
                <p class="mb-2"></p>
                <p class="mb-2">電話：02-123-4567</p>
                <p class="mb-2">curry_planet@gmail.com</p>
                <p class="mb-2">MON-SUN  14:00-20:00</p>
              </div>
              <ul class="d-flex align-items-center">
                <span class="material-icon"></span>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-xs py-5">Copyright ©Curry Planet All Rights Reserved. Designed by Carol Li</p>
    </div>
  </footer>
</template>
