import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', {
    state: () => ({
        todoList: [
            {nama: 'Belajar HTML', isDone: true},
            {nama: 'Belajar CSS', isDone: false},
            {nama: 'Belajar Vue.js', isDone: false},
            {nama: 'Belajar PHP', isDone: false},
        ]
     }),
  getters: {
    ShowAll(state){
        return state.todoList
    },
    doneOnly(state){
        return state.todoList.filter(item => item.isDone == true);
    },
    undoneOnly(state){
        return state.todoList.filter(item => item.isDone == false);
    }
  },
  actions: {
    setAsDone(index) {
        this.todoList[index].isDone = true;
    },
    setAsUndone(index) {
        this.todoList[index].isDone = false;
    },
    addTodo(data) {
        let exists = this.todoList.filter(item => item.nama == data).length // Ganti 'name' dengan 'nama'
        if(exists) {
                alert('Todo sudah ada!')
                return
        }

        this.todoList.push(
            {nama: data, isDone: false}
        );
    } // Tambahkan koma di sini
  } // ... existing code ...
})