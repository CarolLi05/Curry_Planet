<template>
  <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BsModal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      modal: ''
    }
  },
  methods: {
    openModal () {
      this.modal.show()
    },
    closeModal () {
      this.modal.hide()
    },
    updateProduct () {
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.dir(err)
        })
    }
  },
  mounted () {
    this.modal = new BsModal(this.$refs.modal)
  }
}
</script>
