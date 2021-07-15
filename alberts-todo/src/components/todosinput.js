import { useState } from "react"

function Todoinput({onClick}){
  const [title,setTitle]=useState("")
 
  return <div>
    <input placeholder="add somethhing" value={title} onChange={(e)=>{
      setTitle(e.target.value)
    }}/>
    <button onClick={()=>{
      onClick(title)
    }}>ADD A TASK</button>
  </div>
}
export {Todoinput}