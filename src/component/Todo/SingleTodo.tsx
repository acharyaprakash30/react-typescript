import React from "react";
import { TodoType } from "./TodoType";

type Props = {
  todos: TodoType[];
  todo: TodoType;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

  function handleDone(id:string){
    setTodos(todos.map((data)=>{
      if(data.id === id){
        data.isDelete = !data.isDelete
      }
      return data
    }))
  }
  function handleDelete(id:string){
    setTodos(todos.filter((data)=>data.id !== id))
  }


  return (
    <section className="singleTodo"
    >
      {todo.isDelete ? (
        <s className="todoTitle">{todo.todo}</s>
      ):(
        <p className="todoTitle">{todo.todo}</p>
      )
    }
      <div className="action">
        <span className="icon" onClick={()=>handleDelete(todo.id)}>Delete</span>
        <span className="icon" onClick={()=>handleDone(todo.id)}>Done</span>
      </div>
    </section>
  );
};

export default SingleTodo;
