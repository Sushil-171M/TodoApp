import React from "react";
import { Button } from "@material-ui/core";
import { ListItem } from "@mui/material";

export default function TodoLists({ todo, doneHandler, deleteHandler }) {
  const deleteTodo = (index) => {
    deleteHandler(index);
  };

  const doneTodo = (index) => {
    doneHandler(index);
  };
  return (
    <>
      <div style={{ margin: "10px" }}>
        <b> TodoLists ({todo.length}) </b>
      </div>
      <div>
        {Object.keys(todo).length
          ? todo.map((data, index) => {
              return (
                <div key={index}>
                  <ListItem key={index}>
                    <div className="data">
                      <h2 className={data.isDone ? "done" : "done2"}>
                        {data.value}
                      </h2>
                    </div>
                    <div className="btn">
                      <Button
                        variant="outlined"
                        onClick={() => deleteTodo(index)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={() => doneTodo(index)}
                      >
                        Done
                      </Button>
                    </div>
                  </ListItem>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}
