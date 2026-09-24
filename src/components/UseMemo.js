import React, { useMemo } from "react";

function UseMemo({ todos }) {
  const todoCount = useMemo(() => {
    console.log("Calculating todo count...");

    return todos.length;
  }, [todos]);

  return (
    <div>
      <h3>Total Todos: {todoCount}</h3>
    </div>
  );
}

export default UseMemo;
