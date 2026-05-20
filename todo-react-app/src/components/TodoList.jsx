import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <section className="todo-list-section">
      <ul className="todo-list">
        <TodoItem />
      </ul>
    </section>
  );
}

export default TodoList;
