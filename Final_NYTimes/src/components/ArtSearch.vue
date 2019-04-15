<template>
  <div class="hello">
    <h1 class="title">Search Articles</h1>
    <input type="text" placeholder="Search Articles Here">
    <button v-on:click="searchArticles()">Search</button>

        <div class="Articles">
      <h2>{{ ArticleData.adx_keywords}}</h2>
      <h2>{{ ArticleData.column}}</h2>
      <h2>{{ ArticleData.section}}</h2>
      <h2>{{ ArticleData.byline}}</h2>
      <h2>{{ ArticleData.title}}</h2>
      <h2>{{ ArticleData.published_date}}</h2>
      <h2>{{ ArticleData.source}}</h2>

    </div>

  </div>
</template>

<script>
export default {
  name: 'ArtSearch',
  props: {
  },    data(){
      return{
        ArticleData: 'test'
      }
      
    },
  methods:{
    searchArticles(){
      fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=rU3W7B1vk0fOCceF9jI48cVbyjkaG7ff')
      .then( data =>data.json() )
      .then( data =>{
        this.ArticleData = data;
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
