import { useEffect, useRef, useState } from "react"

export function Stopwatch(){
  const [milliseconds,setMilliseconds]=useState(0)
  const [seconds,setSeconds]=useState(0)
  const [minutes,setMinutes]=useState(0)
  const timeref=useRef()
  const stopwatch101=()=>{
    timeref.current=setInterval(()=>{
       setMilliseconds((prev)=>{
         let seconds=prev
         if((prev-1)%100===0){
          setSeconds((prev2)=>{
             let minutes=prev2
             if((prev2-1)%60===0){
                setMinutes((prev3)=>{
                  return prev3+1
                })
             }
             return minutes+0.5
          })  
         }
         return seconds+1
       })
    },100)
  }
  // console.log(minutes)

  const stopstopwatch=()=>{
    console.log(timeref)
     clearInterval(timeref.current)
  }
  const resetstopwatch=()=>{
     setSeconds(0)
     setMilliseconds(0)
     stopwatch101()
  }
   return (
     <div>
       <h1>Stopwatch101</h1>
       <h2>  <span style={{fontSize:'150%'}}>
       {minutes>0?minutes+"m":""}{seconds}</span><span>s</span> {milliseconds}</h2>
       <button onClick={stopwatch101}>Start</button>
       <button onClick={stopstopwatch} >Stop</button>
       <button onClick={resetstopwatch} >Reset</button>
     </div>
   )
}