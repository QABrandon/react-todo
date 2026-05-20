function AddTodo() {
  return (
    <section className="todo-input-section">
      <form className="todo-form">
        <div className="input-group">
          <input type="text" placeholder="Enter a new todo..." />
          <button type="submit" className="add-btn">
            Add Todo
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddTodo;
