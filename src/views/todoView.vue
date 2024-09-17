<template>
    <h1>halaman List To do</h1>

    <form @submit.prevent="addToDo(newTodo)">
      <input type="text" v-model="newTodo" placeholder="add new Todo">
      <input type="submit" value="Add">
    </form>

    <div style="width : 500px; padding-inline-start: 40px;" >
      <h3 style="text-align: center;">To Do List</h3>
    </div> 

    <div class="getters-Button">
      <button>Show All</button>
      <button>Done Only</button>
      <button>Undone Only</button>
    </div>
  
    <!-- sh
     ow All list -->
   <div> 
    <ul>
      <li v-for="list in todoStore.todoView"> 
        <span> {{ list.name }} </span>
        <span>
          <button v-if="!list.isDone" @click="todoStore.setAsDone(index)">set as done</button>
          <button v-if="list.isDone" @click="todoStore.setAsUndone(index)">set as undone</button>
        </span>
      </li>
    </ul>
  </div>

  <!-- show done only list -->
   <div> 
    <ul>
      <li v-for="list in todoStore.todoView">
        <span> {{ list.name }} </span>
        <span>
          <button v-if="!list.isDone" @click="todoStore.setAsDone(index)">set as done</button>
          <button v-if="list.isDone" @click="todoStore.setAsUndone(index)">set as undone</button>
        </span>
      </li>
    </ul>
  </div>

  <!-- show undone only list -->
   <div> 
    <ul>
      <li v-for="list in todoStore.todoView">
        <span> {{ list.name }} </span>
        <span>
          <button v-if="!list.isDone" @click="todoStore.setAsDone(index)">set as done</button>
          <button v-if="list.isDone" @click="todoStore.setAsUndone(index)">set as undone</button>
        </span>
      </li>
    </ul>
  </div>

  </template>
  
  <style scoped>

    form {
      width: 500px;
      padding-inline-start: 40px;
      margin-bottom: 40px;
    }

    form-input {
    padding: 10px;
      width: 80%;
    }
    
    form-input:first-child{
      width: 80%;
      margin: 0px 10px;
    }
    ul {
      list-style: none;
      width: 500px;
    }
    
    li {
      margin-bottom: 10px;
      padding: 10px;
      background-color: #f5f5f5;
      border-radius: 1px;
      display: flex;
      justify-content: space-between;
    }
    
    .getters-Button{
      display: flex;
      justify-content: center;
      gap: 10px;
      width : 500px; 
      padding-inline-start: 40px
    }
    
    </style>
  <script>
    import "../stores/todoStore.js" 
    
    export default {
        setup() {
            const  todoStore  =  usetodoStore()
  
            return { todoStore }
        },
        data() {
          return {
              newTodo: ''
          }
        },
    }
  </script>
