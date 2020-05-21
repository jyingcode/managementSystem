<template>
  <div id="app">
    <Nav />
    <div class="main">
      <Siderbar />
      <div class="content">
        <router-view />
    </div>
       
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Siderbar from './components/Siderbar'
export default {
  name: 'App',
  components: {
    Nav,
    Siderbar,
  },
 
  // created() {
  //   setTimeout(() => {
  //     this.$router.push('/index'),
  //     this.$router.push('/list'),
  //     this.$router.push('/add')
  //   }, 2000)
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main{
  overflow: hidden;
  height: 800px;
}



</style>
