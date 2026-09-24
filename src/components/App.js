import React, { useEffect, useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [task, setTask] = useState("");

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.length > 5) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  return (
    <div>
      <h1>Task Management App</h1>

      <h2>Counter: {counter}</h2>

      <button onClick={addTodo}>Add Todo</button>

      <button onClick={increment}>Increment</button>

      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Todos</h2>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <UseMemo todos={todos} />

      <ReactMemo counter={counter} />
    </div>
  );
}

export default App;
