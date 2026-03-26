import { useState , useRef } from "react";

function App() {
  const [value, setValue] = useState("");
  const timerRef = useRef(null)

    function debounce(str, delay=500){
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        console.log("Api Called with query: "+ str)
      }, delay);
    }

  function handleChange(e){
    setValue(e.target.value);
    debounce(e.target.value, 500) 
  }

  return <input type="text" value={value} onChange={handleChange} />
}

export default App;