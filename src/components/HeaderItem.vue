<template>
  <header class="header" v-bind:class='{active:isActive01}'>
    <div class="header__inner">
      <h1 class="header__tit">{{ title }}</h1>
      <div class="header__menu">
        <button id="btn" class="button" type="button" v-on:click='isActive01=!isActive01' v-bind:class='{active:isActive01}'>
          <span class="button__top btn_default"></span>
          <span class="button__middle btn_default"></span>
          <span class="button__bottom btn_default"></span>
        </button>
      </div>
    </div>
    <menu>
      <li><a href="">test</a></li>
      <li><a href="">test</a></li>
      <li><a href="">test</a></li>
    </menu>
  </header>
</template>

<script>
export default {
//Vue インスタンスのためのデータオブジェクトです
  data(){
    return{
      title: "Portfolio",
      isActive01: false
    }
  }
}
</script>
<style>
.header {
  position: relative;
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
menu {
  position: fixed;
  opacity: 0;
  color: #999;
  margin-top: 0;
}
.active menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  background-color: #fff;
}
.active .button__top {
  transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.active .button__middle {
  display: none;
}
.active .button__bottom {
  transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
</style>