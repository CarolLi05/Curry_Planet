<template>
  <div class="container">
    <h2 class="mt-4">菜單底加</h2>
    <div class="row row-cols-1 row-cols-md-3">
      <div class="col my-5" v-for="product in products" :key="product.id">
        <div class="card border-0 rounded-0 my-5 position-relative" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
          <img :src="product.imageUrl" :alt="product.title" class="card-img-top rounded-0">
          <!-- <div class="card-img-overlay bg-dark opacity-25">
            v-show="hover"
            <h4 class="card-title">
              <router-link :to="`product/${product.id}`" class="btn btn-primary">More</router-link>
              {{product.title}}</h4>
          </div> -->
          <a href="#" class="link-light">
            <i class="fa-regular fa-heart position-absolute"></i>
          </a>
          <div class="card-body p-0">
            <h4 class="card-title mt-4 mb-1">
              <router-link :to="`product/${product.id}`" class="link-dark title-link position-relative">
                <div class="title-circle position-absolute"></div>
                {{ product.title }}
              </router-link>
            </h4>
            <p class="card-text text-muted">NT$ {{product.price}}</p>
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
      products: [],
      hover: false
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
    },
    mouseEnter () {
      this.hover = true
    },
    mouseLeave () {
      this.hover = false
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
<style scoped lang="scss">
.fa-heart{
  top: 16px;
  right: 16px;
}

.stretched-link:hover{
  text-decoration: underline;
}

.title-link{
  &:after{
  content: ' ';
  position: absolute;
  background-color: #EF8B0B;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  top: -5px;
  right: -15px;
  opacity: 0.8;
  // transition: .6s ease-out;
  // &:hover{
  //   transform: scale(1.2);
  // }
  }
}
</style>
