<template>
  <div class="bg-dark text-light">
    <div class="container">
      <!-- 麵包屑 -->
      <!-- <nav aria-label="breadcrumb ">
        <ol class="breadcrumb py-3 py-md-6 m-0">
          <li class="breadcrumb-item"><router-link class="text-secondaryDark text-decoration-underline fs-small fs-md-5" to="/">首頁</router-link></li>
          <li class="breadcrumb-item ps-1"><a href="#" class="text-secondaryDark text-decoration-underline fs-small fs-md-5" to="/search" @click.prevent="transferCate">{{ product.category }}</a></li>
          <li class="breadcrumb-item ps-1 text-secondaryDark active" aria-current="page"><span class="fs-small fw-bold fs-md-5">{{ product.title }}</span></li>
        </ol>
      </nav> -->
      <div class="row justify-content-center py-5">
        {{ product }}
        <div class="col-4">
          <img :src="product.imageUrl" alt="" class="w-50">
        </div>
        <div class="col-8">
          <h2 class="mb-3">{{product.title}}</h2>
          <p class="mb-2">{{product.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
        })
        .catch((err) => {
          console.dir(err)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
