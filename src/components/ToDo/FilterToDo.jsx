import React from "react";
import FilterButton from "./FilterButton";

const FilterToDo = ({ filter, setFilter, FILTER_MAP }) => {
  const buttonNames = Object.keys(FILTER_MAP); // ['All', 'ToDo', 'Done']

  return (
    <div>
      {buttonNames.map((item) => (
        <FilterButton key={item} name={item} setFilter={setFilter} isPressed={filter === item} />
      ))}
    </div>
  );
};

export default FilterToDo;
