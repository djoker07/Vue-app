import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import App from './App'
import Routes from './routes'

Vue.use(VueFire);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:Routes,
  mode:'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
