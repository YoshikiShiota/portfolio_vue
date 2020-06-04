<template>
  <header class="header ${ title }" v-bind:class='{active:isActive01}'>
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
    <menu class="menu">
      <div class="menu__left">
        <p class="menu__tit">Portfolio</p>
      </div>
      <ul class="menu__right">
        <li class="list__block link_1"><router-link to="/" class="nav__link">TOP</router-link></li>
        <li class="list__block link_2"><router-link to="/contents" class="nav__link">CONTENTS</router-link></li>
        <li class="list__block link_3"><router-link to="/skills" class="nav__link">SKILL</router-link></li>
        <li class="list__block link_4"><router-link to="/contact" class="nav__link">CONTACT</router-link></li>
      </ul>
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
.menu {
  position: fixed;
  top: -100%;
  width: 100%;
  height: 100%;
  color: #999;
  margin-top: 0;
  display:-webkit-box;
  display:-ms-flexbox;
  display: flex;
  justify-content: space-between;
  transition: top 0.5s, opacity 0.5s;
  z-index: 5;
}
.active .menu {
  top: 0;
  left: 0;
  background-color: #fff;
}
.menu__left,
.menu__right {
  padding-top: 200px;
  box-sizing: border-box;
}
.menu__left {
  width: 30%;
  background-color: #000;
}
.menu__right {
  width: 70%;
  padding-left: 150px;
  text-align: left;
  background-color: #fff;
}
.menu__tit {
  font-size: 40px;
}
.list__block {

}
.active .list__block {
  animation-name: fadeIn;
  animation-duration: 2s;
}
.nav__link {
  color: #999;
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-size: 40px;
  margin-bottom: 10px;
}
.nav__link::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #999;
  opacity: 0;
  visibility: hidden;
  transition: .3s;
}
.nav__link:hover::after {
  bottom: 6px;
  opacity: 1;
  visibility: visible;
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
@keyframes fadeIn {
  0% {opacity: 0}
  100% {opacity: 1}
}
</style>