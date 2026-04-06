import { useState, useEffect, useRef } from "react";

function App() {
  const [width, setWidth] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setWidth((prev) => {
          if (prev >= 100) {
            clearInterval(intervalRef.current);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  function handleStart() {
    setRunning(true);
  }

  function handlePause() {
    setRunning(false);
    clearInterval(intervalRef.current);
  }

  function handleReset() {
    setRunning(false);
    clearInterval(intervalRef.current);
    setWidth(0);
  }

  return (
    <div style={{ padding: "20px" }}>
      {/* Progress Bar */}
      <div
        style={{
          width: "300px",
          height: "20px",
          border: "2px solid white",
          borderRadius: "6px",
          padding: "2px",
        }}
      >
        <div
          style={{
            width: width + "%",
            height: "100%",
            backgroundColor: "green",
            borderRadius: "4px",
            transition: "width 0.2s ease",
          }}
        ></div>
      </div>

      {/* Percentage */}
      <p>{width}%</p>

      {/* Controls */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;