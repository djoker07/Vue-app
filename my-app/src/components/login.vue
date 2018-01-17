<template>
  <div id="loginPage" class="">
    <h3>Sign In</h3>
    <input v-model='email' type="text" placeholder="Email" required><br>
    <input v-model='password' type="password" placeholder="Password" required><br>
    <button v-on:click="login()">Login</button>
    <p>Dont have an account? Make one <router-link to='/signup'> here </router-link> </p>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'loginPage',
  data () {
    return {
        email:'',
        password:'',
        id: ''
    }
  },
  methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            (user) => {
                this.id = user.uid
                this.$router.replace('todo')
            },
            (err) => {
                alert('Oops. ' + err.message)
            }
        );
      }
  }
}

</script>

<style scoped>

#loginPage {
    margin-top: 40px;
}

input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}

button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}

p {
    margin-top: 40px;
    font-size: 13px;
}

p a {
    text-decoration: underline;
    cursor: pointer;
}

</style>