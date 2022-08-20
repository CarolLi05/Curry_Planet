<template>
  <div class="bg-dark text-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-3">
        <h2>菜單底加</h2>
        {{products}}
        <div class="col" v-for="product in products" :key="product.id">
          <div class="card board-0 text-dark">
            <img :src="product.imageUrl" alt=".." class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{product.title}}</h5>
              <p class="card-text">{{product.description}}</p>
            </div>
            <div class="card-footer">
              <router-link :to="`product/${product.id}`" class="btn btn-primary">More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
        })
        .catch((err) => {
          console.dir(err)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
