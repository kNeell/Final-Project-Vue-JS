<template>
  <div class="hello">
    <h1 class="title">Most Popular</h1>
    <button v-on:click="loadPop()">Search</button>
    <div class="Popular">
      <h2>{{ MostPopData.column}}</h2>
      <h2>{{ MostPopData.section}}</h2>
      <h2>{{ MostPopData.byline}}</h2>
      <h2>{{ MostPopData.title}}</h2>
      <h2>{{ MostPopData.published_date}}</h2>
      <h2>{{ MostPopData.source}}</h2> 

    </div>

  </div>
</template>

<script>
export default {
  name: 'MostPop',
  props: {
  },
    data(){
      return{
        MostPopData
      }
      
    },
    methods:{
    loadPop(){
      fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?&api-key=rU3W7B1vk0fOCceF9jI48cVbyjkaG7ff')
      .then( data =>data.json() )
      .then( data =>{
        this.MostPopData = data.results
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
