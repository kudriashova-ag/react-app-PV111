import React, { useState } from "react";
import "./ToDo.css";
import AddToDo from "./AddToDo";
import FilterToDo from "./FilterToDo";
import ItemToDo from "./ItemToDo";
import toDoItems from "./toDoItems";
import { nanoid } from "nanoid";

const ToDoList = () => {
  const [tasks, setTasks] = useState(toDoItems);
  const [filter, setFilter] = useState("All task");

  const addTask = (title) => {
    const newTasks = [
      ...tasks,
      {
        id: nanoid(),
        title: title,
        done: false,
      },
    ];

    setTasks(newTasks);
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  const toggleDoneTask = (id) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setTasks(newTasks);
  };

  const updateTask = (id, title) => {
     const newTasks = tasks.map((item) => {
       if (item.id === id) {
         return { ...item, title: title };
       }
       return item;
     });
     setTasks(newTasks);
  }

  const FILTER_MAP = {
    'All task': () => true,
    ToDo: item => !item.done,
    Done: item => item.done
  }


  return (
    <div className="todo-list">
      <h1 className="text-primary">ToDo List</h1>

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
