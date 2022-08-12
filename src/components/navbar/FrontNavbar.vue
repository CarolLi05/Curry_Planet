<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
  <div class="container-fluid">
      <h1 class="navbar-brand">
        <router-link class="d-block logo-link" to="/">Curry Planet</router-link>
      </h1>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="#">咖哩底加</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#">咖哩星球的本質</router-link>
          </li> -->
          <li class="nav-item">
            <div class="nav-link menu-toggle open">
              <span class="menu-bar menu-bar-start w-50"></span>
              <span class="menu-bar"></span>
              <span class="menu-bar menu-bar-end w-50"></span>
            </div>
          </li>
        </ul>
      </div>
  </div>
</nav>
</template>

<!-- const menuToggle = document.querySelector('.menu-toggle')
// menuToggle.addEventListener('click', function () {
//   menuToggle.classList.toggle('open')
// }) -->
