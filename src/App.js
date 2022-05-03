import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App bg-dark min-vh-100 p-2">
      <div className="container border bg-light p-3">
        <header className="text-center">
          React Todo App
        </header>
        <Todos />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;