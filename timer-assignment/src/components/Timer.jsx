import { useEffect, useState } from "react"

export function Timer({itime,etime}){
  // itime=Number(itime)
  let etime1=Number(etime)
  console.log(itime,"kksks")
  const [time,setTime]=useState(Number(itime))
  useEffect(()=>{
     const timer=setInterval(()=>{
        setTime((prev)=>{
           if(prev===etime1){
             clearInterval(timer)
              return ""
           }
           return prev+1
        })
     },1000)
     return ()=>{
      clearInterval(timer)
    }
  },[])
    
   return <>
   <h1>{time}</h1>
   </>
}