import {useState, useEffect} from "react";

export default function App() {
  const [insertionOrder, setInsertionOrder] = useState([]);
  const [activationOrder, setActivationOrder] = useState([]);
  const gridSize = 3;
  const totalGrids = gridSize * gridSize;

  const handleClick = (index)=>{
    console.log(index);
    if(insertionOrder.includes(index))return;

    setInsertionOrder(prev => [...prev, index]);
    setActivationOrder(prev => [...prev, index]);

    if(insertionOrder.length+1 == totalGrids)
    backTrack([...insertionOrder, index]);
  }

  function backTrack(order){
    order
    .reverse()
    .forEach((elem,idx)=>(
      setTimeout(() => {
        setActivationOrder(prev => prev.filter(c => c != elem));
      }, (idx+1)*500)
    ))
  }

  return <div className="grid-container">
      {Array.from({length:totalGrids}).map((elem,idx)=>(
        <div onClick={()=>handleClick(idx)} key={idx} className={`cell ${activationOrder.includes(idx)? "active": ""}`}></div>
      ))}
  </div>


}