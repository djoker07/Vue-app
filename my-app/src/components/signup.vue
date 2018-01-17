<template>
  <div id="signupPage" class="">
    <h3>Sign In</h3>
    <input type="text" placeholder="Email" required><br>
    <input type="text" placeholder="Password" required><br>
    <button>Login</button>
    <span>Go back to Login</span>
  </div>
</template>

<script>

export default {
  name: 'singupPage',
  data () {
    return {

    }
  },
  methods: {
 
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

p {
    margin-top: 40px;
    font-size: 13px;
}

p a {
    text-decoration: underline;
    cursor: pointer;
}

</style>