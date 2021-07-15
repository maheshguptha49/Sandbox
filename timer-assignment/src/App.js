import { useState } from "react";
import { Timer } from "./components/Timer";
import "./styles.css";

export default function App() {
  const [itime,setItime]=useState('')
  const [etime,setEtime]=useState('')
  const [render,setRender]=useState(false)
  return (
    <div className="App">
      <input onChange={(e)=>{
       
         setItime(e.target.value)
         console.log(itime)
      }} type="number" maxLength="2" placeholder="Intial time"/>
      <input onChange={(e)=>{
       
         setEtime(e.target.value)
         console.log(etime)
      }} type="number" maxLength="2" placeholder="End time"/>
      <button onClick={()=>{
         setRender(!(render))
      }} >Submit</button>
      {render?<Timer itime={itime} etime={etime} />:""}
    </div>
  );
}
