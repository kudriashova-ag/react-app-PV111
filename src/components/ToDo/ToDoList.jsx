import React, { useEffect, useReducer, useState } from "react";
import "./ToDo.css";
import AddToDo from "./AddToDo";
import FilterToDo from "./FilterToDo";
import ItemToDo from "./ItemToDo";
import toDoItems from "./toDoItems";
import { nanoid } from "nanoid";
import todoReducer from "../../reducers/todoReducer";

const ToDoList = () => {
  const [tasks, dispatch] = useReducer(todoReducer, []);
  const [filter, setFilter] = useState("All task");

  useEffect(() => { 
    dispatch({
      type: "fill",
      payload: JSON.parse(localStorage.getItem("tasks")) || toDoItems,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks]);


  const addTask = (title) => {
    dispatch({
      type: "add",
      payload: {
        id: nanoid(),
        title: title,
        done: false,
      },
    });
  };

  const removeTask = (id) => {
    dispatch({ type: 'delete', payload: id });
  };

  const toggleDoneTask = (id) => {
    dispatch({ type: "toggleDone", payload: id });
  };

  const updateTask = (id, title) => {
    dispatch({ type: "update", payload: {id, title} });
  }

  const FILTER_MAP = {
    'All task': () => true,
    ToDo: item => !item.done,
    Done: item => item.done
  }


  return (
    <div className="todo-list">
      <h1 className="text-primary">ToDo List</h1>
      <div>{tasks.filter(item => item.done).length } of { tasks.length }  </div>
      <AddToDo addTask={addTask} />

      <FilterToDo
        filter={filter}
        setFilter={setFilter}
        FILTER_MAP={FILTER_MAP}
      />

      <div>
        {tasks.filter(FILTER_MAP[filter]).map((item) => (
          <ItemToDo
            item={item}
            key={item.id}
            removeTask={removeTask}
            toggleDoneTask={toggleDoneTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
