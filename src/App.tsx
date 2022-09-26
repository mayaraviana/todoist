import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  function consoleLogTaks() {
    console.log(tasks);
  }
  const [tasks, setTask] = useState([
    {
      id: uuidv4(),
      name: "Essa é uma tarefa teste",
    },
  ]);
  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={consoleLogTaks}>Console Log taks</button>
    </div>
  );
}

export default App;
