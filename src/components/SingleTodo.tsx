import React from 'react'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import {Todo} from '../models/model'
import TodoList from './TodoList';
type props={
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>,

}


const SingleTodo = ({todos,setTodos,todo}:props) => {
   
    const handleDone = (id: number) => {
        setTodos(todos.map((todo)=>
       ( todo.id===id?{...todo,isDone:!todo.isDone}:todo)
        ))
      };
      const handleDelete=(id:number)=>{
         setTodos(todos.filter((todo)=>todo.id!==id))
      }
  return (
    <form className='todos__single'>
        {todo.isDone?(      
            
            <s className='todo__single--text'>{todo.todo}</s>
            )
            :(        
            <span className='todo__single--text'>{todo.todo}</span>
            )
        
    }
        <div>
            <span className='icon'><AiFillEdit/></span>
            <span className='icon' onClick={
                ()=>
                handleDelete(todo.id)
            }><AiFillDelete/></span>
            <span className='icon' onClick={()=>
                handleDone(todo.id)
            }><MdDone/></span>
        </div>
    </form>
  )
}

export default SingleTodo