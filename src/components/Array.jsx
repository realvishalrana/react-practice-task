import { useState } from "react";

export default function TaskApp() {
  const [todos, setTodos] = useState([{ text: "raj" }]);

  const handleChange = (e) => {
    setTodos([
      ...todos,
      {
        text: e.target.value,
      },
    ]);
  };

  return (
    <>
      <label>
        todos
        <input onChange={handleChange} />
      </label>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
