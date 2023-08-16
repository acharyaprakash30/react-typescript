import React, { useRef } from "react";
import "./Todo.css";

type Props = {
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todo: string;
  handleSubmit: (e: React.FormEvent) => void;
};

const InputForm: React.FC<Props> = ({ setTodo, todo, handleSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event) =>{
       handleSubmit(event)
       inputRef.current?.blur();
       }} className="submitForm">
      <input
        type="text"
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        name="todo"
        id="todoInput"
      />
      <button className="submitBtn" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputForm;
