import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Input, InputLabel, ListItem, FormControl } from "@mui/material";
import TodoLists from "./TodoLists";
export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [seeFlag, setSeeFlag] = useState(false);

  const addTodoHandler = (e) => {
    setInput(e.target.value);
  };

  const addTodoInList = (e) => {
    const obj = {
      value: input,
      isDone: false
    };
    const x = [...todo];
    x.push(obj);
    setTodo(x);
    setInput("");
  };

  const seeTodoLists = () => {
    setSeeFlag(!seeFlag);
  };

  const doneHandler = (index) => {
    const data = [...todo];
    data[index].isDone = !data[index].isDone;
    setTodo(data);
  };

  const deleteHandler = (index) => {
    const data = [...todo];
    data.splice(index, 1);
    setTodo(data);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="label">
          <label>
            <h1>Todo App</h1>
          </label>
        </div>
        <div className="todo">
          <div className="input">
            <FormControl sx={{ m: 2 }} variant="standard">
              <InputLabel>Todo</InputLabel>
              <Input type="text" onChange={addTodoHandler} value={input} />
            </FormControl>
          </div>
          <div>
            <Button variant="outlined" onClick={addTodoInList}>
              Add Todo
            </Button>
          </div>
          <div>
            <Button
              style={{ marginTop: "10px" }}
              variant="outlined"
              onClick={seeTodoLists}
            >
              <div> {seeFlag ? "Hide Lists " : "Show Lists"}</div>
            </Button>
            {seeFlag && (
              <TodoLists
                todo={todo}
                doneHandler={doneHandler}
                deleteHandler={deleteHandler}
              />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
