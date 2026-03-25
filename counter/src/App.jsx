import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return count<0? <div>{alert(5)}</div> : 
     <div>
      <p>{count}</p>
      <button onClick={()=> setCount(prev => prev+1)}>+</button>
      <button onClick={()=> setCount(prev => prev-1)}>-</button>
    
  </div>
}

export default App
