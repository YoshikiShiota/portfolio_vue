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
::selection {
  background-color: rgb(206, 205, 205);
}
body,
h1,
p,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
menu {
  padding: 0;
}
ul {
  list-style: none;
}
</style>
