<template>
<div class="d-flex my-3">
  <button class="btn btn-outline-primary" id="getProducts">取得產品列表</button>
  <button class="btn btn-outline-primary" id="addProduct">新增一個產品</button>
  <button class="btn btn-outline-primary" id="delProduct">刪除一個產品</button>
</div>
{{productsAll}}
<div class="d-flex justify-content-between align-items-center mb-4">
  <div class="header d-flex align-items-center">
    <h2 class="pe-3">後台商品管理</h2>
    <select name="" id="" class="form-select w-auto">
      <option value="">全部</option>
    </select>
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fa-solid fa-plus"></i>
    新增商品
  </button>
</div>
<table class="table table-hover align-middle">
  <thead>
    <tr>
      <th scope="col" class="fw-bold">類別</th>
      <th scope="col">名稱</th>
      <th scope="col">原價</th>
      <th scope="col">售價</th>
      <th scope="col">是否上架</th>
      <th scope="col">編輯｜刪除</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in productsAll" :key="product.id">
      <th scope="row">{{ product.category }}</th>
      <td>{{product.title}}</td>
      <td>NT$ {{ product.origin_price }}</td>
      <td>NT$ {{ product.price }}</td>
      <td>{{product.is_enabled}}</td>
      <td>
        <div class="d-flex align-items-center">
          <button type="button" class="btn btn-sm btn-outline-primary rounded me-1 editBtn" @click="openProductModal">
            <!-- ('edit', item) -->
            <i class="fa-solid fa-pencil"></i>
          </button>｜
          <button type="button" class="btn btn-sm btn-outline-danger rounded ms-1 delBtn">
            <!-- @click="openModal ('delete', item)" -->
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<ProductModal ref="ProductModal"></ProductModal>
</template>

<script>
// import { ref } from 'vue'
import ProductModal from '@/components/modal/ProductModal'
export default {
  data () {
    return {
      productsAll: [],
      // count: ref(10),
      tempProduct: {} // 新增的資料存在這裡
    }
  },
  components: {
    ProductModal
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
    },
    openProductModal () {
      this.$refs.modal.openModal()
    }
  },
  mounted () {
    this.getAllProducts()
  }
}
</script>
