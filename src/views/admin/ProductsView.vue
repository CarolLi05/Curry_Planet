<template>
<h2>後台商品管理</h2>
<button class="btn btn-outline-primary" id="getProducts">取得產品列表</button>
<button class="btn btn-outline-primary" id="addProduct">新增一個產品</button>
<button class="btn btn-outline-primary" id="delProduct">刪除一個產品</button>
<br>
{{productsAll}}
<div class="row row-cols-1 row-cols-md-3 g-3">
  <div class="col" v-for="product in productsAll" :key="product.id">
    <div class="card board-0">
      <img :src="product.imageUrl" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{product.title}}</h5>
        <p class="card-text">{{product.description}}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card board-0">
      <img src="" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      productsAll: []
    }
  },
  methods: {
    getAllProducts () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`)
        .then((res) => {
          console.log(res)
          this.productsAll = res.data.products
        })
        .catch((err) => {
          console.dir(err)
        })
    }
  },
  mounted () {
    this.getAllProducts()
  }
}
</script>
