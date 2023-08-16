import React from 'react'
import { TodoType } from './TodoType'
import SingleTodo from './SingleTodo'
import "./Todo.css"

type Props = {
    todos:TodoType[],
    setTodos:React.Dispatch<React.SetStateAction<TodoType[]>>,
}

const TodoItems:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <section className='todoList'>
    {
        todos && todos.map((item,i)=>{
            return(
                <SingleTodo todos={todos} setTodos={setTodos} todo = {item}  key ={item.id} />
            )
        })
    }
    </section>
  )
}

export default TodoItems