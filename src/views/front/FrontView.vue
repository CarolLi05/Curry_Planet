<template>
  <Navbar></Navbar>
  <h2>Front</h2>
  <router-view></router-view>
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
