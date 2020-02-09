import React from "react";

import "./index.css";

const AddCounter = ({ onAdd }) => {
  return (
    <div className="add-counter">
      <button onClick={() => onAdd()} className="button">
        Add Counter
      </button>
    </div>
  );
};

export default AddCounter;
