<template>
  <div id="createAccount" class="">
    <h3>Create and account</h3>
    <input v-model='email' type="text" placeholder="Email" required><br>
    <input v-model='password' type="password" placeholder="Password" required><br>
    <button v-on:click='signUp'>Create Account</button>
    <span>Go back to <router-link to='/'> Login </router-link> </span>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'createAccount',
  data () {
    return {
        email:'',
        password:''
    }
  },
  methods: {
    signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
            (user) => {
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

#signupPage {
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

span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}


</style>