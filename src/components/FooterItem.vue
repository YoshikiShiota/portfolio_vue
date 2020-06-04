<template>
  <footer>
    <div class="footer_inner">
      <div class="footer_top">
        <p class="footer_tit">Portfolio</p>
        <ul class="footer_right">
          <li class="link__block"><router-link to="/" class="footer_link">TOP</router-link></li>
          <li class="link__block"><router-link to="/contents" class="footer_link">CONTENTS</router-link></li>
          <li class="link__block"><router-link to="/skills" class="footer_link">SKILL</router-link></li>
          <li class="link__block"><router-link to="/contact" class="footer_link">CONTACT</router-link></li>
        </ul>
      </div>
      <div class="footer_bottom">
        <p class="copyright">&copy;2020 YOSHIKI SHIOTA</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style>
.footer_inner {
  display: block;
  width: 900px;
  margin: 0 auto;
}
.footer_top {
  display:-webkit-box;
  display:-ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
  padding-bottom: 80px;
}
.footer_tit {
  font-size: 25px;
}
.link__block {
  text-align: left;
  margin-bottom: 4px;
}
.footer_link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  margin-bottom: 5px;
  color: #999;
  position: relative;
  text-decoration: none;
}
.footer_link::after {
  position: absolute;
  bottom: -6px;
  left: 0;
  content: '';
  width: 100%;
  height: 1px;
  background: #999;
  opacity: 0;
  visibility: hidden;
  transition: .3s;
}
.footer_link:hover::after {
  bottom: 0px;
  opacity: 1;
  visibility: visible;
}
.copyright {
  font-size: 12px;
  text-align: left;
}
</style>