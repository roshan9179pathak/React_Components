import { useState } from 'react'
// import './App.css'

function App() {
  const [size, setSize] = useState(12)

  return (
    <div style={{border: "2px solid black", width:"80vw"}}>
      {Array.from({length: size}).map((_,i) => (
        <div style={{display: "flex"}} key={i}>
             {Array.from({length:size}).map((_,j)=>{
              let isBlack = (i+j)%2? 0:1;
             return <div style={{width:"40px", height: "40px", backgroundColor: isBlack?"white":"black", flex:"1"}} key={j}></div>
             })}  
        </div>
      ))}
    </div>
  )
}

export default App
