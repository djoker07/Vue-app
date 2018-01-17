<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <!-- <todo-app v-if="loggedIn"></todo-app>
    <login v-else></login> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Todo from "./components/todo"
import Login from "./components/login"

export default {
  name: 'app',
  components: {
    'todo-app': Todo,
    'login': Login,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loggedIn: false,
    }
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

h1, h2 {
  font-weight: normal;
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
