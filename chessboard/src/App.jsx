import { useState } from "react";
import "./Chessboard.css";
function App() {
  const [length, setLength] = useState(4)

  return <div id="main-container">
    {Array.from({length: length}).map((_,i) =>{
      {Array.from({length: length}).map((_,j) =>{
        const isBlack = (j%2) !== 0
        return (
          <div className={`square ${isBlack ? "black": "white"}`} key={j}></div>
        )
      })}
    })}
  </div>


}

export default App;