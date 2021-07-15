import { useState } from "react"
import {TodosItem} from './todositems'
import {TodosInput} from './todosinput'
let Todoslist=()=>{
  const [tliist,setTlist]=useState([])
  let handletodos=(item)=>{
   setTlist([...tliist,item])
  }
  return <div>
    <TodosInput addTodos ={handletodos}/>
   <div>
   {tliist.map((el)=>{
     return <TodosItem element ={el}/>
    })}
   </div>
  </div>
}
export {Todoslist}