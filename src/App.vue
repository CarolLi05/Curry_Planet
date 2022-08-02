<template>
  <Navbar></Navbar>
  <nav>
    <router-link to="/about">About</router-link> |
    <router-link :to="{name: 'Dashboard'}">admin</router-link> |
  </nav>
  <router-view/>
</template>

<script>
import Navbar from '@/components/navbar/FrontNavbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import "./assets/style/all.scss";
</style>
