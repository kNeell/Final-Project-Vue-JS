import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import NewYorkTimes from './components/NewYorkTimes.vue'
import ArtSearch from './components/ArtSearch.vue'
import MostPop from './components/MostPop.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  { path: '/home', component: NewYorkTimes },
  { path: '/ArtSearch', component: ArtSearch },
  { path: '/MostPop', component: MostPop}
]

const router = new VueRouter({
  routes 
})

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
