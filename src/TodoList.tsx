import React, { useState } from "react";
import "macro-css";


import "./App.module.scss";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([]);

  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
  if (input.trim() !== "") { // Проверка, что ввод не пустой
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput(""); 
  }
};


  const handleDeleteClick = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  

  return (
    <div className="main-container">
      <div className="section">
        <div className="content d-flex justify-center mt-50 mb-40">
          <img src="./src/assets/Logo.png" alt="Logo" />
        </div>
        <div className="header-info d-flex justify-center mb-50">
          <input
            type="text"
            placeholder="Добавьте задачу..."
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <button onClick={handleClick}>Добавить +</button>
        </div>
        <div className="content d-flex flex-column align-center mr-40">
          <ul className="todo-info">
            {todos.map((todo) => (
              <li
                className="todo d-flex align-center justify-between"
                
                key={todo.id}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                <img
                  onClick={() => handleToggle(todo.id)}
                  src={todo.completed ? "./src/assets/check.png" : "./src/assets/btn-check.png"}
                  alt="Check"
                  className="check"
                />
                {todo.text}
                <img src="./src/assets/del.png" 
                onClick={() => handleDeleteClick(todo.id)} 
                className="del" alt="Nochecked" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
