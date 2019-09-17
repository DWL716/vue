<template>
  <div id="app">
    <leftNav1></leftNav1>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  components:{
    leftNav1:leftNav
  }
}
</script>

<style>
#app {
  font-family:'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.main {
  float: left;
  width: 95%;
  height: 100%;
  background-color: #eff2f7;
  overflow: auto;
}
</style>
