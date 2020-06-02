<template>
  <footer>
    <div class="footer_inner">
      <div class="footer_top">
        <p class="footer_tit">Portfolio</p>
        <div class="footer_right">
          <router-link to="/" class="footer_link">TOP</router-link>
          <router-link to="/contents" class="footer_link">CONTENTS</router-link>
          <router-link to="/skills" class="footer_link">SKILL</router-link>
          <router-link to="/contact" class="footer_link">CONTACT</router-link>
        </div>
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
.footer_link {
  display: block;
  text-align: left;
  margin-bottom: 5px;
  color: #999;
  text-decoration: none;
}
.footer_link:hover {
  color: #999;
}
.copyright {
  font-size: 12px;
  text-align: left;
}
</style>