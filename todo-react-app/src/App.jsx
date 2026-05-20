import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <header>
        <h1>React Todo List</h1>
      </header>
      <main>
        <AddTodo />
        <TodoFilters />
        <TodoList />
      </main>
    </>
  );
}

export default App;
