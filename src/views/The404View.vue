<template>
<div class="bg-dark text-white d-flex flex-column align-items-center w-100 vh-100 pt-10">
  <div class="d-flex justify-content-center align-item-center pt-10 w-100">
    <div class="w-100 pt-10">
      <div class="four-layer position-relative">
        <img src="../assets/images/4.svg" alt="" class="four-left position-absolute">
        <img src="../assets/images/4.svg" alt="" class="four-right position-absolute">
      </div>
      <div class="d-flex justify-content-center align-item-center">
        <img src="../assets/images/404.svg" alt="" class="img-404 w-25">
      </div>
      <div class="text-center">
        <h3 class="pt-8 text-center">哎呀，好像有東西不見了</h3>
        <p class="text-center pt-3">目前找不到你要的頁面</p>
        <router-link to="/" class="btn btn-primary rounded-pill">返回首頁</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">
  .four{
    &-left{
      width: 10%;
      top: -32px;
      left: 31%;
      animation: up-down 6s ease-in-out infinite;
    }
    &-right{
      width: 10%;
      top: 120px;
      right: 28%;
      animation: down-up 6s ease-in-out infinite;
    }
  }

  @keyframes down-up{
    0%{ transform: translateY(-10%);}
    50%{ transform: translateY(10%);}
    100%{ transform: translateY(-10%);}
  }
  @keyframes up-down {
    0%{ transform: translateY(10%);}
    50%{ transform: translateY(-10%);}
    100%{ transform: translateY(10%);}
  }
</style>
