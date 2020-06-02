<template>
  <header class="header">
    <!-- データを表示させます。-->
    <div class="header__inner">
      <h1 class="header__tit">Portfolio</h1>
      <div class="header__menu">
        <button id="btn" class="button" type="button" >
          <span class="button__top btn_default"></span>
          <span class="button__middle btn_default"></span>
          <span class="button__bottom btn_default"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
//Vue インスタンスのためのデータオブジェクトです
  // data(){
  //   return{
  //     title: "Portfolio",
  //     subTitle: "A \"Creating Shared Value\" company."
  //   }
  // }
}
</script>
<style>
.header {
  padding-top: 50px;
}
.header__inner {
  display:-webkit-box;
  display:-ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 900px;
  margin: 0 auto;
}
.header__tit {
  color:#999;
}
.button {
  display: block;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  position: relative;
  z-index: 100;
  appearance: none;
  cursor: pointer;
  outline: none;
}
.btn_default {
  display: block;
  width: 20px;
  height: 1px;
  margin: auto;
  background-color: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: .5s ease;
}
.button__top {
  transform: translateY(-6px);
}
.button__bottom {
  transform: translateY(6px);
}

</style>