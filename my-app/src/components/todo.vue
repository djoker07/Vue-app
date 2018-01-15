<template>
  <div id="taskApp" class="jumbotron col-sm-8">
    <h3>TODO Tasks</h3>

    <!-- add new -->
    <div class="">
        <form v-on:submit.prevent='addTask'>
            <div class="col-sm-8">
                <input v-model="newTask.name" type="text" class="form-control" placeholder="add new task" required />
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
                <tr v-bind:key="index" v-for="(todo, index) in todos">
                    <td ><span>{{todo.name}}</span></td>
                    <td><button v-on:click="deleteTask(todo)" class="btn btn-danger btn-sm-block">Delete</button></td>
                </tr>
            </tbody>

        </table>
    </div>

  </div>
</template>

<script>
import db from './conn.js'

export default {
  name: 'taskApp',
  firebase: {
      todos: db.todoTable
  },
  data () {
    return {
      newTask: {
          name: "",
      },
    }
  },
  methods: {
      addTask: function () {
          //remove this later or change it
          db.todoTable.push(this.newTask);
          this.newTask.name = "";
        //   this.tasks.push(tempObject);
        //   this.$http.post(db, tempObject).then(
        //   function (data) {
        //       console.log(data);
        //   });
      },
      deleteTask: function (task) {
          //change later
        //   console.log(this.tasks.indexOf(task));
          
        //   this.tasks.splice(
        //       this.tasks.indexOf(task), 1
        //   );
        //   this.$http.delete(task);
        db.todoTable.child(task['.key']).remove();
      }
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
</style>