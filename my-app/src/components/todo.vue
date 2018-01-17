<template>
  <div id="taskApp" class="jumbotron col-sm-8">
    <h3>TODO Tasks</h3>

    <!-- add new -->
    <div class="">
        <form v-on:submit.prevent='addTask'>
            <div class="col-sm-8">
                <input v-model="name" type="text" class="form-control" placeholder="add new task" required />
            </div>
            <div class="col-sm-4">
                <input type="submit" class="btn btn-primary btn-block"  value="Add"/>
            </div>
        </form>
    </div>

    <div id="tableDiv">
        <table class="table">
            <thead>
                <th>Task Name</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <tr v-if="todo.uid == id" v-bind:key="index" v-for="(todo, index) in todos">
                    <td><span>{{todo.name}}</span></td>
                    <td><button v-on:click="deleteTask(todo)" class="btn btn-danger btn-sm-block">Delete</button></td>
                </tr>
            </tbody>

        </table>
    </div>

    <button v-on:click="logout">Logout</button>

  </div>
</template>

<script>
import db from './conn.js'
import firebase from 'firebase'

// let user = firebase.auth().currentUser;

export default {
  name: 'taskApp',
  firebase: {
      todos: db.todoTable
  },
  data () {
    return {
        name:"",
        id: ""
    }
  },
  methods: {
      addTask: function () {
          let newTask = {
              name: this.name,
              uid: firebase.auth().currentUser.uid
          }
        //   console.log(newTask)
          db.todoTable.push(newTask);
          this.name = "";
      },
      deleteTask: function (task) {
        db.todoTable.child(task['.key']).remove();
      },
      logout: function () {
          firebase.auth().signOut().then( () => {
              this.$router.replace('login')
          })
      },
  },
  created() {
      this.id = firebase.auth().currentUser.uid
  }
}
</script>

<style>
th {
    text-align: center;
}

#taskApp {
    max-width: 600px;
}

div {
    padding: 10px;
}

#tableDiv {
    max-height:400px;
    overflow:auto;
}

button {
    padding: 10px 20px;
    background: #42b983;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 22px;
    outline: 0;
    cursor: pointer;
}
</style>