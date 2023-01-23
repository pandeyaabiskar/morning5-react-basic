import { useState, useEffect } from "react";
// import Button from "../../components/Button";
import Input from "../../components/Input"

import { Button }  from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


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

  const CustomizedButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));



  const handleInput = () => {
    setTodos((prev) => [...prev, todoText]);
    setTodoText("")
  };

  const handleInputText = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
        <h1>Todo Application</h1>
      </Grid>
      <Grid item xs={10}>
              <TextField
          id="todo"
          label="Todo"
          value={todoText}
          onChange={handleInputText}
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={2}>
        <CustomizedButton variant="contained" onClick={handleInput} fullWidth           
        >Text</CustomizedButton>
      </Grid>
      <Grid item xs={12}>
               <ul>
          {todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </Grid>
      <Grid item xs={12}>
                       <p>Todo Count : {todos.length}</p>

        
      </Grid>
  </Grid>
  );
}

export default TodoLayout;
