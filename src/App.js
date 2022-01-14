import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((counter) => counter + 1);
  const onChange = (e) => setKeyword(e.target.value);

  useEffect(() => console.log("i run 'counter' changes"), [counter]);

  useEffect(() => console.log("i run 'keyword' changes"), [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
