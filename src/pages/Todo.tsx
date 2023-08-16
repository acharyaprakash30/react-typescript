import React, { useState } from 'react'
import InputForm from '../component/Todo/InputForm';
import { TodoType } from '../component/Todo/TodoType';
import TodoItems from '../component/Todo/TodoItems';
import "./pages.css"
type Props = {}

const Todo = (props: Props) => {
  const[todo,setTodo] = useState<string>("");
  const [todos,setTodos] = useState<TodoType[]>([]);

  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
        setTodos([...todos,{id:`${Date.now()}`,todo,isDelete:false}])
    }
    setTodo("")
  }

  return (
    <section className='todoWrapper'>
        <h1 className='todoHeading'>Todo With Typescript</h1>
      <InputForm  handleSubmit ={handleSubmit} setTodo={setTodo} todo={todo} />
      <TodoItems todos={todos} setTodos = {setTodos} />

    </section>
  )
}

export default Todo