<template>
  <Navbar></Navbar>
  <div class="container">
    <h2>Dashboard</h2>
    <router-link to="/login" class="link-primary">Login</router-link>
    <button class="btn btn-outline-primary" v-on:click="checkLogin">確認是否登入</button>
    <router-view v-if="checkSuccess"></router-view>
  </div>
</template>
<script>
import Navbar from '@/components/dashboard/DashboardNavbar.vue'

export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  components: {
    Navbar
  },
  methods: {
    checkLogin () {
      // 取得 Token（Token 僅需要設定一次）
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)curryPlanetToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      // header 夾帶
      this.$http.defaults.headers.common.Authorization = token
      // 確認是否登入
      this.$http.post(`${process.env.VUE_APP_API}/api/user/check`)
        .then((res) => {
          console.log(res)
          this.checkSuccess = true
        })
        .catch((err) => {
          console.dir(err)
          // 轉址到登入頁
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
