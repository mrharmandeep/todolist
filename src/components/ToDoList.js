import React from 'react'
import ToDo from './ToDo';
function ToDoList({todos,setTodos,filteredTodos}) {
  return (
    <div class="todo-container">
      <ul class="todo-list">
        {filteredTodos.map((todo)=>(
        <ToDo todo={todo} setTodos={setTodos} todos={todos} text={todo.text} key={todo.id}/>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList