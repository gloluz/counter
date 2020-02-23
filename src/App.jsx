import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AddCounter from "./components/AddCounter";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import "./App.css";

library.add(faStopwatch);

function App() {
  const [counters, setCounters] = useState([0]);

  const handleCounterChange = (value, index) => {
    const newCounters = [...counters];
    newCounters[index] = value;
    setCounters(newCounters);
  };

  const handleAddCounter = () => {
    const newCounter = [...counters, 0];
    setCounters(newCounter);
  };

  return (
    <div>
      <header>
        <div className="header-title">
          <FontAwesomeIcon icon="stopwatch" className="icon" />
          <h1>React Counter V2</h1>
        </div>
      </header>

      <AddCounter onAdd={handleAddCounter} />

      <div className="counters">
        {counters.map((counter, index) => {
          return (
            <Counter
              key={index}
              counter={counter}
              onChange={value => handleCounterChange(value, index)}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
