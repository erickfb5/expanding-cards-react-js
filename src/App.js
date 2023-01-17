import React, { useState } from "react";
import "./App.css";
import { panels } from "./panels";

const App = () => {
  const [activePanel, setActivePanel] = useState(0);

  return (
    <div className="container">
      {panels.map((panel, index) => (
        <div
          key={index}
          className={`panel ${index === activePanel ? "active" : ""}`}
          style={{ backgroundImage: `url(${panel.background})` }}
          onClick={() => setActivePanel(index)}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
