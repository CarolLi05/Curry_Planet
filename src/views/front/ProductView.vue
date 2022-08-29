<template>
  <div class="container">
    <!-- 麵包屑 -->
    <!-- <nav aria-label="breadcrumb ">
      <ol class="breadcrumb py-3 py-md-6 m-0">
        <li class="breadcrumb-item"><router-link class="text-secondaryDark text-decoration-underline fs-small fs-md-5" to="/">首頁</router-link></li>
        <li class="breadcrumb-item ps-1"><a href="#" class="text-secondaryDark text-decoration-underline fs-small fs-md-5" to="/search" @click.prevent="transferCate">{{ product.category }}</a></li>
        <li class="breadcrumb-item ps-1 text-secondaryDark active" aria-current="page"><span class="fs-small fw-bold fs-md-5">{{ product.title }}</span></li>
      </ol>
    </nav> -->
    <div class="row justify-content-center align-items-center mt-5 py-5">
      <div class="col-md-7">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb px-0 mb-0 py-3">
            <li class="breadcrumb-item"><router-link class="text-muted" to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link class="text-muted" to="/products">Product</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
          </ol>
        </nav>
        <h2 class="h1 mb-3">{{product.title}}</h2>
        <p class="mb-0 text-muted text-end"><del>NT$ {{product.origin_price}}</del></p>
        <p class="h4 text-end mb-2">NT$ {{product.price}}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button class="btn btn-outline-primary border-0 py-2" type="button" id="button-addon1">
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
              <div class="input-group-append">
                <button class="btn btn-outline-primary border-0 py-2" type="button" id="button-addon2">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <a href="./checkout.html" class="text-nowrap btn btn-primary w-100 py-2">加入購物車</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-5">
      <div class="col-md-4">
        <p>{{ product.description }}</p>
      </div>
      <div class="col-md-3">
        <p class="text-muted">內含雞肉、香辛料，以及很多的愛心</p>
      </div>
    </div>
  </div>
  <div class="bg-light py-5">
    <div class="container">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center ">
        <p class="mb-0 fw-bold">三天以前訂位，即招待點心一份</p>
        <div class="input-group w-md-50 mt-md-0 mt-3">
          <input type="email" class="form-control rounded-0" placeholder="abc@email.com" />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button">立即預約</button>
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
