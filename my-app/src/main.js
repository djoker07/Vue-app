import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueFire from 'vuefire'

Vue.use(VueResource);
Vue.use(VueFire);

new Vue({
  el: '#app',
  render: h => h(App)
})
