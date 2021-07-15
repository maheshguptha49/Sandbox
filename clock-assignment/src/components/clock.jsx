import { useEffect, useState } from "react"

export function Clock(){
  let time=new Date().toLocaleTimeString()
 const[time1,setTime1]=useState(time)
 const[showClock,setShowclock]=useState(true)
const timefunction =()=>{
  const timer=setInterval(()=>{
    // setTime1()
    let time5=new Date().toLocaleTimeString()
    setTime1(time5)
    console.log("jjg")
  },1000)
}
  //  useEffect(timefunction,[])
   return(
     <>
     <h1>{showClock?time1:""}</h1>
      {showClock? <button onClick={()=>{
       timefunction()
     }}>Show Live Time</button>:""}
     <button onClick={()=>setShowclock(!(showClock))}>{showClock?"Hide Clock":"Show Clock"}</button>
     </>
   )
}