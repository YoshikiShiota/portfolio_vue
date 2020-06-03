<template>
  <div id="app">
    <HeaderItem/>
    <router-view/>
    <FooterItem/>
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem'
import FooterItem from './components/FooterItem'

export default {
  name: 'app',
  components : {
    HeaderItem,
    FooterItem
  }
}
</script>

<style>
#app {
  font-family: 'Sawarabi Mincho', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,
h1,
p {
  margin: 0;
  font-weight: normal;
}
</style>
