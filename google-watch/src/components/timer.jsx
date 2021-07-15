import { useRef, useState } from "react"

export function Timer(){
  const [seconds,setSeconds]=useState(60)
  const [minutes,setMinutes]=useState(5)
  const timerref=useRef()
  const timer101=()=>{
    console.log(minutes)
     timerref.current=setInterval(()=>{
      setSeconds((prev)=>{
        let s=prev
         if(prev===0){
            s=60
            setMinutes((prev2)=>{
               return prev2-0.5
            })
         }

        return s-1
      })
     },1000)
  }
    const stopTimer=()=>{
       clearInterval(timerref.current)
    }
    const resetTimer=()=>{
      setMinutes(5)
      setSeconds(60)
      // timer101()
      clearInterval(timerref.current)
    }
   return (
     <div>
        <h1>Timer</h1>
       <h2> <span style={{fontSize:'150%'}}>{minutes}</span><span>m</span> {seconds}s</h2>
       <button onClick={timer101}>Start</button>
       <button onClick={stopTimer}>Stop</button>
       <button onClick={resetTimer}>Reset</button>
     </div>
   )
}