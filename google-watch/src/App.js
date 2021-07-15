import { useState } from "react";
import { Stopwatch } from "./components/stopwatch";
import { Timer } from "./components/timer";
import "./styles.css";

export default function App() {
  const [timer,setTimer]=useState(true)
  const [stopwatch,setStopwatch]=useState(false)
  return (
    <div className="App">
      <button onClick={()=>{
         timer?setTimer(false):setTimer(true)
         stopwatch?setStopwatch(false):setStopwatch(true)
      }}>{timer?"show Stopwatch":"show Timer"}</button>
      {timer?<Timer/>:null}
   {stopwatch?<Stopwatch/>:null}

    </div>
  );
}
