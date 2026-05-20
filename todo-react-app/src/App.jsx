import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const todoText = inputText.trim();

    if (!todoText) {
      setErrorMessage("Please enter a todo item");
      return;
    }

    if (todoText.length < 3) {
      setErrorMessage("Todo must be at least 3 characters long");
      return;
    }

    setErrorMessage("");

    const newTodo = {
      id: Date.now().toString(),
      text: todoText,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTodos((previousTodos) => [...previousTodos, newTodo]);
    setInputText("");
  };

  return (
    <>
      <header>
        <h1>React Todo List</h1>
      </header>
      <main>
        <AddTodo
          inputText={inputText}
          onInputChange={handleInputChange}
          onSubmit={handleFormSubmit}
          errorMessage={errorMessage}
        />
        <TodoFilters />
        <TodoList todos={todos} />
      </main>
    </>
  );
}

export default App;
