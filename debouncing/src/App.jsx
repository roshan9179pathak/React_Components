import {React, useState, useRef} from "react";

function App(){
  const [value, setValue] = useState("");
  let timeOutId = useRef(null);

  function makeAPICall(val){
    if(!val)return;
    console.log("Making Api call with "+ val);
  }

  function handleInput(e){
    setValue(e.target.value);

    if(timeOutId.current)
    clearTimeout(timeOutId.current);

    timeOutId.current = setTimeout(() => {
      makeAPICall(e.target.value)
    }, 1000);

  }

  return (
    <div>
      <input onChange={handleInput} type="text" placeholder="Enter product to search..." value={value} />
    </div>
  )

}

export default App;
