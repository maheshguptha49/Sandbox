import { useState } from "react"
import {v4 as uuid} from 'uuid'
let TodosInput=({addTodos})=>{
  const [text,setText]=useState("")
 
  return (
    <div>
      <input type="text"
      value={text} 
      placeholder="Enter todo" onChange ={(e)=>{
        setText(e.target.value)
      }}/>
      <button onClick={()=>{
        const payload={
          id:uuid(),
          text:text,
          status:false
        }
        addTodos(payload)
        setText("")
      }}>Add Todos</button>
    </div>
  )
}
export {TodosInput}