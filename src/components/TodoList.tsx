import React from 'react'
import './styles.css'
import {Todo} from '../models/model'
import SingleTodo from './SingleTodo';
interface props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }
const TodoList= ({todos, setTodos}:props) => {
  return (
    <div className='todos'>
        {todos.map((todo)=>(
           <SingleTodo 
           todos={todos}
           setTodos={setTodos}
           todo={todo}
           key={todo.id}

           />
        ))}
    </div>
  )
}

export default TodoList