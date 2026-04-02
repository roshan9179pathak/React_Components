import {React, useState} from "react"
function App() {
  const [hours, setHour] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  function startTimer() {
    let totalSeconds = hours * 3600 + mins * 60 + secs;
  
    if (totalSeconds === 0) {
      alert("Please set Timer");
      return;
    }
  
    setIsDisabled(false);
  
    const interval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(interval);
        setIsDisabled(true);
        return;
      }
  
      totalSeconds--;
  
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;
  
      setHour(h);
      setMins(m);
      setSecs(s);
    }, 1000);
  }

  return <div>
    <h3>Countdown Timer</h3>
    <div>
      <input key={5} onChange={(e)=>setHour(Number(e.target.value))} type="text" value={hours} />
      :
      <input key={125} onChange={(e)=>setMins(Number(e.target.value))} type="text" value={mins} />
      :
      <input key={58} onChange={(e)=>setSecs(Number(e.target.value))} type="text" value={secs} />
    </div>

  <div>
    <button disabled={isDisabled}>Reset</button>
    <button onClick={startTimer}>Start</button>
  </div>

  </div>
}
export default App;