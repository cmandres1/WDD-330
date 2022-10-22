import Todos from './todos.js';
window.myTodos = new Todos('todos');
window.addEventListener('load', function(event) {
   window.myTodos.showTaskList();
  });

