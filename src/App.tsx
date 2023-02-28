import { TodoForm } from "./components/TodoForm";
import { TodoTable } from "./components/TodoTable";

import "./App.scss";
import { Modal } from "./components/Modal";

function App() {

  return (
    <div className="App">
      <h1 className="App__title">Todo App</h1>
      <TodoForm/>
      <TodoTable />
    </div>
  );
}

export default App;
