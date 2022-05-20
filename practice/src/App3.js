import React, { useMemo, useState } from "react";

const App3 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  //return only when count changes
  const calculation = useMemo( ()=>{
      return expensiveCalculation(count)
  },[count] ) ;

  const increment = () => {
    setCount(count + 1);
  };
  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {/* index */}
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default App3;