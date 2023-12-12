import classNames from "classnames";
import React, { useState } from "react";

const ItemToDo = ({ item, removeTask, toggleDoneTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(item.title);

  const saveHandler = () => {
    if (editingText.trim().length === 0) {
      alert("Error");
      return;
    }
    updateTask(item.id, editingText);
    setIsEditing(false);
  };

  const cancelHandler = () => { 
    setEditingText(item.title);
    setIsEditing(false);
  }

  const keyHandler = (e) => { 
    if (e.code === 'Enter')
      saveHandler();
    if (e.code === "Escape")
      cancelHandler();
  }

  const viewTemplate = (
    <span
      className={classNames({ done: item.done })}
      onClick={() => setIsEditing(true)}
    >
      {item.title}
    </span>
  );

  const editTemplate = (
    <div>
      <input
        type="text"
        autoFocus
        value={editingText}
        onChange={(e) => setEditingText(e.target.value)}
        onKeyUp={keyHandler}
        onBlur={saveHandler}
      />
      <button onClick={saveHandler}>save</button>
      <button onClick={cancelHandler}>cancel</button>
    </div>
  );

  return (
    <div className="task">
      <input
        type="checkbox"
        defaultChecked={item.done}
        onClick={() => toggleDoneTask(item.id)}
      />

      {isEditing ? editTemplate : viewTemplate}

      <button onClick={() => removeTask(item.id)}>delete</button>
    </div>
  );
};

export default ItemToDo;
