import React from "react";

import "./index.css";

const Counter = ({ counter, onChange }) => {
  return (
    <div className="counter">
      <div className="counter__display">
        <button
          onClick={() => onChange(counter - 1)}
          className="counter__minus"
        >
          {counter !== 0 && "-"}
        </button>
        <div className="counter__display__result">
          <div>{counter}</div>
        </div>
        <button onClick={() => onChange(counter + 1)} className="counter__plus">
          {counter !== 10 && "+"}
        </button>
      </div>
      <div>
        <button onClick={() => onChange(0)} className="button counter__reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
