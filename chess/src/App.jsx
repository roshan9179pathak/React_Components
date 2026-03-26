import { useState } from 'react'
import "./Chessboard.css"

function App() {
  const [length, setLength] = useState(12)

  return (
    <div id="main-container">
      {Array.from({ length }).map((_, i) => (
        <div key={i} className="row">
          {Array.from({ length }).map((_, j) => {
            const isBlack = (i + j) % 2 !== 0;
            return (
              <div
                key={j}
                className={`square ${isBlack ? "black" : "white"}`}
              >
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default App