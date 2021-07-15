 import { useState } from "react"
import { Todolist } from "./todolits.js"
import { Todoinput } from "./todosinput.js"
import {v4 as uuid} from 'uuid'
import styles from './todo.module.css'
function Todo(title){
  const [data,setData]=useState([])
  const [cdata,setCdata]=useState([])
  const handleToAdd=(title)=>{
    const payload={
      title:title,
      status:false,
      id:uuid(),
    }
    setData ([...data,payload])
  }
  const handleChange =()=>{
   const data2=data.filter(item =>item.status===true)
   setCdata(data2)
  }
 const handleDelete=(data)=>{
   setData(data)
 }
  return <div className={styles.cont1}>
    <h1 className={styles.header}>Todo App</h1>
  <Todoinput onClick={handleToAdd}/>
  <div className={styles.list}>
  {data.map((item)=>{
    return <Todolist key={item.id} data={data}  {...item}handleDelete={handleDelete}
   />
  })}
  </div>
  <button onClick={()=>{ 
    handleChange()
  }} className={styles.showButtons}>show completed tasks</button>
  </div>
}
export {Todo}