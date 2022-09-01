<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" ref="cartComponent">
    <div class="offcanvas-header">
      <h4 id="offcanvasRightLabel">購物車</h4>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <table class="table text-center">
        <thead>
          <tr>
            <th scope="col" class="border-0 ps-0">品項</th>
            <th scope="col" class="border-0">數量</th>
            <th scope="col" class="border-0">金額</th>
            <th scope="col" class="border-0"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-bottom border-top">
            <th scope="row" class="border-0 px-0 font-weight-normal py-4">
              <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" style="width: 72px; height: 72px; object-fit: cover;">
              <p class="mb-0 fw-bold d-inline-block">Lorem ipsum</p>
            </th>
            <td class="border-0 align-middle" style="max-width: 160px;">
              <div class="input-group input-group-sm pe-5">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
                <input type="text" class="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
                <div class="input-group-append">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </td>
            <td class="border-0 align-middle"><p class="mb-0 ms-auto">NT$12,000</p></td>
            <td class="border-0 align-middle"><i class="fas fa-times"></i></td>
          </tr>
          <tr class="border-bottom">
            <th scope="row" class="border-0 px-0 font-weight-normal py-4">
              <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" style="width: 72px; height: 72px; object-fit: cover;">
              <p class="mb-0 fw-bold d-inline-block">Lorem ipsum</p>
            </th>
            <td class="border-0 align-middle" style="max-width: 160px;">
              <div class="input-group pe-5">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
                <input type="text" class="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
                <div class="input-group-append">
                  <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </td>
            <td class="border-0 align-middle"><p class="mb-0 ms-auto">NT$12,000</p></td>
            <td class="border-0 align-middle"><i class="fas fa-times"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import BsOffcanvas from 'bootstrap/js/dist/offcanvas'
export default {
  data () {
    return {
      cartComponent: ''
    }
  },
  methods: {
    openCart () {
      this.cartComponent.show()
    }
  },
  mounted () {
    this.cartComponent = new BsOffcanvas(this.$refs.cartComponent)
    // console.log(this.$refs.cartComponent)
  }
}
</script>
