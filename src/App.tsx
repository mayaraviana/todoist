import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";

import "./global.css";

function App() {
  function consoleLogTaks() {
    console.log(tasks);
  }
  const [tasks, setTask] = useState([
    {
      id: uuidv4(),
      title: "Essa é uma tarefa teste",
    },
  ]);
  return (
    <div>
      <Header />
      <button onClick={consoleLogTaks}>Console Log taks</button>
    </div>
  );
}

export default App;
