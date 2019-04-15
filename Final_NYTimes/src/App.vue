<template>
  <div id="app">
    <img alt="NY logo" src="./assets/NYlogo.png">
    <h1 class="title">America's News</h1>
      <router-link to="/home">Home</router-link> ||
      <router-link to="/ArtSearch">Search For Articles</router-link> ||
      <router-link to="/MostPop">Most Popular</router-link>
      
      <router-view></router-view>
  </div>
</template>

<script>
// import NewYorkTimes from './components/NewYorkTimes.vue'
// import ArtSearch from './components/ArtSearch.vue'
// import MostPop from './components/MostPop.vue'

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
