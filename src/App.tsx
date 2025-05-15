import React from "react";
import TodoApp from "./components/TodoApp";
import "./App.css";
const App: React.FC = () => {
  return (
    <div className="todo-app">
      <TodoApp />
    </div>
  );
};

export default App;
