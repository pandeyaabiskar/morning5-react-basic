import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input"

function TodoLayout() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  //useEffect Hook
  
  //1. Runs below function on all updates to the page
  // useEffect(() => {
  //   console.log("Component mounted")
  // })

  //2. Runs only after mounting of the component
  // useEffect(() => {
  //   console.log("Component mounted")
  // }, [])

  //3. Runs on update of dependent state
  useEffect(() => {
    console.log("Component mounted")

    //Runs the return function when the component is unmounted
    return () => {
      console.log("Component unmounted")
    }
  }, [todos])



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
        <Input value={todoText} onChange={handleInputText} />
        <Button onClick={handleInput}>Add</Button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
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
