import { useState, useRef } from 'react'

function App() {
  function makeApiCall(){
    console.log("Api call made...");
  }

  function throttle(fn, delay){
    let lastCall = Date.now();
    
    return function(params){
      let now = Date.now();
      if(now-lastCall >= delay){
        fn(...params);
        lastCall = now;
      }
    }
  }

  let throttleFn = useRef(throttle(makeApiCall,1000)).current;

  useEffect(()=>{

  },[throttleFn])

  window.addEventListener("resize", ()=>{
   
  })

  return (
   <div></div>
  )
}

export default App
