<template>
  <Navbar></Navbar>
  <div class="bg-dark">
    <router-view></router-view>
  </div>
  <Footer></Footer>

</template>
<script>
import Navbar from '@/components/front/FrontNavbar.vue'
import Footer from '@/components/front/FrontFooter.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
