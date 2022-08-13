<template>
  <footer class="footer bg-dark text-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 p-8">
        <div class="col">
          <div class="">
            <img src="../assets/images/Logo-circle.svg" alt="" class="logo w-50">
          </div>
        </div>
        <div class="col">
          <ul class="nav flex-column list-unstyled">
            <li class="nav-item">
              <router-link class="nav-link" to="/about">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">菜單底加</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/booking">預訂位子</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">聯絡我們</router-link>
            </li>
          </ul>
        </div>
        <div class="col">
          <ul class="nav flex-column list-unstyled">
            <li class="nav-item py-1">台南市東區長榮路一段234巷17號</li>
            <li class="nav-item py-1">電話：02-123-4567</li>
            <li class="nav-item py-1">curry_planet@gmail.com</li>
            <li class="nav-item py-1">MON-SUN  14:00-20:00</li>
          </ul>
          <ul class="nav d-flex align-items-center list-unstyled">
            <li class="nav-item">
              <router-link class="nav-link ps-0 me-4" to="/">
                <i class="h4 fa-brands fa-square-facebook"></i>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link ps-0 me-4" to="/">
                <i class="h4 fa-brands fa-instagram"></i>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link ps-0 me-4" to="/">
                <i class="fa-brands fa-line h4"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <p class="text-center text-xs py-5">Copyright ©Curry Planet All Rights Reserved. Designed by Carol Li</p>
    </div>
  </footer>
</template>
