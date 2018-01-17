<template>
  <div id="loginPage" class="">
    <h3>Sign In</h3>
    <input type="text" placeholder="Email" required><br>
    <input type="text" placeholder="Password" required><br>
    <button>Login</button>
    <p>Dont have an account? Make one here</p>
  </div>
</template>

<script>

export default {
  name: 'loginPage',
  data () {
    return {

    }
  },
  methods: {
 
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