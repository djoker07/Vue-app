import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import App from './App'
import Router from './routes'
import firebase from 'firebase'

Vue.use(VueFire);
Vue.use(VueRouter);

let app;

firebase.auth().onAuthStateChanged(function(user) {
  if(!app) {
    app = new Vue({
      el: '#app',
      render: h => h(App),
      router: Router,
      user: this.user
    })
  }
});

