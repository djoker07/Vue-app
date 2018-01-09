<template>
  <div id="taskApp" class="jumbotron col-sm-8">
      <h3>TODO Tasks</h3>

      <!-- add new -->
      <div class="">
          <form v-on:submit='addTask'>
              <div class="col-sm-8">
                  <input v-model="newTask" type="text" class="form-control" placeholder="add new task" />
              </div>
              <div class="col-sm-4">
                  <input type="submit" class="btn btn-primary btn-block"  value="Add"/>
              </div>
          </form>
      </div>

        <table class="table">
            <thead>
                <th>Checkmark Done</th>
                <th>Task Name</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <tr v-bind:key="index" v-for="(task, index) in tasks">
                   <td><input v-model="task.completed" type="checkbox"></td>
                   <td ><span :class="{ taskDone: task.completed }">{{task.name}}</span></td>
                   <td><button v-on:click="deleteTask(task)" class="btn btn-danger btn-block">Delete</button></td>
                </tr>
            </tbody>

        </table>

  </div>
</template>

<script>
export default {
  name: 'taskApp',
  data () {
    return {
      tasks: [
          {name: 'this is a superlong just because', completed: false},
          {name: 'test 2', completed: false},
          {name: 'test 3', completed: false},
      ],
      newTask: "",
    }
  },
  methods: {
      addTask: function (e) {
          //remove this later or change it
          e.preventDefault();
          var tempObject = {
              name: this.newTask,
              completed: false
          };
          this.tasks.push(tempObject);
      },
      deleteTask: function (task) {
          //change later
          console.log(this.tasks.indexOf(task));
          
          this.tasks.splice(
              this.tasks.indexOf(task), 1
          );
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

.taskDone {
    text-decoration: line-through;
}
</style>