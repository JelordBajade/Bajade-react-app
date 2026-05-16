import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div className="fun-app">
      <div className="fun-container">

        <h1 className="fun-title">
          Counter App
        </h1>

        {/* Counter */}
        <h2 className="fun-counter">
          {count}
        </h2>

        {/* Buttons */}
        <div className="fun-buttons">
          <button
            className="fun-btn plus"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>

          <button
            className="fun-btn minus"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>

          <button
            className="fun-btn reset"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

        {/* Conditional Rendering */}
        {count >= 5 && (
          <div className="goal">
            Goal Reached!
          </div>
        )}

        {/* Input */}
        <input
          type="text"
          placeholder="Type a message..."
          className="fun-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Live Message */}
        <p className="fun-output">
          {message}
        </p>

      </div>
    </div>
  );
}

export default App;