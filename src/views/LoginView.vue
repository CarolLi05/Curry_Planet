<template>
<div class="container">
  <div class="row justify-content-center">
    <h1 class="text-center my-4">Login</h1>
    <router-link to="/admin" class="link-primary">Dashboard</router-link>
    <form class="form col-5" @submit.prevent="login">
      <div class="form-floating mb-3">
        <input type="email" class="form-control" v-model="user.username" id="userName">
        <label for="userName">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" v-model="user.password" id="userPsw">
        <label for="userPaw">Password</label>
      </div>
      <button class="btn btn-lg btn-primary w-100" type="submit" id="loginBtn">登入</button>
    </form>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      // 發送 api 到遠端並登入
      this.$http.post(`${process.env.VUE_APP_API}/admin/signin`, this.user)
        .then((res) => {
          console.log(res)
          // 取出 token
          const { token, expired } = res.data
          // token 寫入 cookie
          document.cookie = `curryPlanetToken = ${token}; expires = ${new Date(expired)}`
          // 轉到後台
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          console.dir(err)
          alert('登入資料有誤，請重新輸入！')
          this.user.username = ''
          this.user.password = ''
        })
    }
  }
}
</script>
