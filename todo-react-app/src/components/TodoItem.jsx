function TodoItem() {
  return (
    <li className="todo-item">
      <input type="checkbox" className="todo-checkbox" />
      <span className="todo-text">Sample todo</span>
      <div className="todo-actions">
        <button type="button" className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
