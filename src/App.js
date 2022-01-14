import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    else {
      setTodoList((curr) => [...curr, todo]);
    }
    console.log(todoList);
    setTodo("");
  };

  return (
    <div>
      <h1>My To Dos ({todoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your ToDo"
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
