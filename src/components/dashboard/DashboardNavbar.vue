<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
  <div class="container-fluid">
      <h1 class="navbar-brand">
        <router-link class="d-block logo-link" to="/">Curry Planet</router-link>
      </h1>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/booking">訂單列表</router-link>
          </li>
        </ul>
      </div>
  </div>
</nav>
</template>
