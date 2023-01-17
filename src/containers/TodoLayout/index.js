import { useState } from "react";
import Button from "../../components/Button";

function TodoLayout() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleInput = () => {
    setTodos((prev) => [...prev, todoText]);
    setTodoText("")
  };

  const handleInputText = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <>
      <h1>Todo Application</h1>
      <div>
        <input
          id="todo-input"
          type="text"
          value={todoText}
          onChange={(e) => handleInputText(e)}
        ></input>
        {/* <Button label="Add" handleClick={handleInput} /> */}
        <Button onClick={handleInput}>Add</Button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
      <div>
        <p>Todo Count : {todos.length}</p>
      </div>
    </>
  );
}

export default TodoLayout;
