import { useEffect, useState } from "react"
import axios from "axios";
import {v4 as uuid} from 'uuid'
import { TodoItem, Todolist } from "./todoitem";


export function Todo(){
  const [title,setTitle]=useState('')
  const [todolist,setTodolist]=useState([])
 const[buttons,setButtons]=useState([1,2,3,4,5])
  async function getTodo (pno){
    let {data}=await axios.get(`http://localhost:3000/todos?_page=${pno}&_limit=3`)
    console.log(data)
   setTodolist(data)
 }
  useEffect(()=>{
     getTodo(1)
  },[])
  console.log(todolist,"bbb")
 const handleDelete=(data)=>{
  setTodolist(data)
}
   return (
     
     <>
      <input placeholder="enter todo" onChange={(e)=>{
         setTitle(e.target.value)
      }}/>
      <button onClick={()=>{
    const payload={
      title:title,
      status:false,
      id:uuid(),
    }
    axios.post("http://localhost:3000/todos",payload)
    .then((res)=>{
      getTodo()
    })
  }}>Add todo</button>
  <div>{todolist.map((item)=>{
    return <Todolist handleDelete={handleDelete} data={todolist} {...item}/>
  })}</div>
   {buttons.map((item)=>{
      return <button onClick={()=>{
        if(item<3){
          getTodo(item)
          return ''
        }
         let data=[]
         for(let i=item-2;i<=item+2;i++){
            data.push(i)
         }
         setButtons(data)
         getTodo(item)
      }}>{item}</button>
   })}
     </>
   )
}