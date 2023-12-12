import classNames from 'classnames';
import React from 'react';

const FilterButton = ({name, setFilter, isPressed}) => {
    return (
      <button
        onClick={() => setFilter(name)}
        className={classNames({ active: isPressed })}
      >
        {name}
      </button>
    );
}

export default FilterButton;
