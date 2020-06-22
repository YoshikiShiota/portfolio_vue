<template>
  <div class="content">
      <div class="content__top">
        <p class="tit__first fadein">Yoshiki Shiota's</p>
        <p class="tit__second fadein">Portfolio</p>
      </div>
      <div class="content__detail">
        <div class="content__first">
          <p class="content__tit">CONTENTS</p>
          <div class="detail">
            <p class="detail_eng">This is the work I have made so far</p>
            <p class="detail_jpn">今まで作った作品です。</p>
            <router-link to="/contents" class="detail__link">view detail</router-link>
          </div>
        </div>
        <div class="content__first">
          <p class="content__tit">SKILL</p>
          <div class="detail">
            <p class="detail_eng">This is the skill</p>
            <p class="detail_jpn">スキルを紹介します。</p>
            <router-link to="/skills" class="detail__link">view detail</router-link>
          </div>
        </div>
        <div class="content__first">
          <p class="content__tit">CONTACT</p>
          <div class="detail">
            <p class="detail_eng">This is contact</p>
            <p class="detail_jpn">気軽に連絡ください。</p>
            <router-link to="/contact" class="detail__link">view detail</router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

</script>

<style>
.content {
  padding:  0 15vw;
  margin: 0 auto 100px;
}
.content__top {
  height: 500px;
  padding-top: 115px;
  background-image: url(../assets/first_view.png);
  background-repeat: no-repeat;
  background-position: top 84px right -30px;
  margin-bottom: 150px;
  position: relative;
}
.content__top::after {
  position: absolute;
  content: "";
  width: 260px;
  height: 107px;
  background-color: #999;
  right: 0;
  bottom: 0;
}
.tit__first,
.tit__second {
  font-size: 50px;
  text-align: left;
  color: #333;
}
.fadein {
  animation-name: fadeIn;
  animation-duration: 4s;
}
@keyframes fadeIn {
  0% {opacity: 0}
  100% {opacity: 1}
}

.content__first {
  display:-webkit-box;
  display:-ms-flexbox;
  display: flex;
  margin-bottom: 200px;
}
.content__tit {
  width: 40%;
  text-align: left;
  font-size: 35px;
}
.detail {
  padding-top: 110px;
  text-align: left;
}
.detail_eng {
  font-size: 30px;
}
.detail_jpn {
  font-size: 25px;
  margin-bottom: 70px;
}
.detail__link {
  color: #999;
  font-size: 20px;
  text-decoration: none;
  transition: all 1.0s;
}
.detail__link:hover {
  color: #000;
  font-size: 25px;
}
@media (max-width: 1200px) {
  .content {
    padding: 0 10vw;
  }
}
@media (max-width: 850px) {
  .tit__first,
  .tit__second {
    font-size: 40px;
  }
  .content__top {
    height: 0;
    padding: 100px 0 150px;
    background-size: 68vw;
    background: none;
  }
  .content__top::after {
    width: 0;
    height: 0;
  }
  .content__first {
    margin-bottom: 100px;
  }
  .content__tit {
    font-size: 28px;
  }
  .detail_eng {
    font-size: 26px;
  }
  .detail_jpn {
    font-size: 25px;
  }
}
</style>
