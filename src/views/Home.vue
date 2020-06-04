<template>
  <div class="content">
      <div class="content__top">
        <p class="tit__first fadein">Yoshiki Shiota's</p>
        <p class="tit__second fadein">Portfolio</p>
      </div>
  </div>
</template>

<script>

</script>

<style>
.content {
  width: 900px;
  margin: 0 auto;
}
.content__top {
  height: 400px;
  padding-top: 80px;
}
.tit__first,
.tit__second {
  font-size: 50px;
  text-align: left;
  color: #333;
}
.tit__first {
}
.tit__second {

}
.fadein {
  animation-name: fadeIn;
  animation-duration: 2s;
}
@keyframes fadeIn {
  0% {opacity: 0}
  100% {opacity: 1}
}
</style>
