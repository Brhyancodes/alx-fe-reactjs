function TodoList({ todos, setTodos }) {
  // const [todos, setTodos] = useState([
  //     { id: 1, title: "Lorem ipsum", completed: false },
  //     { id: 2, title: "dolor sit amet", completed: false },
  // ]);
  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleToggle = (id) => {
    const completedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(completedTodos);
    console.log(completedTodos);
  };

  return (
    <>
      <h2>Todo Items</h2>
      {todos?.map((todo) => (
        <div
          key={todo.id}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            marginBottom: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            name="todo"
            id={todo.id}
            onChange={() => handleToggle(todo.id)}
          />
          {todo.title}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default TodoList;