import axios from "axios"
import { useState } from "react"
import styles from './todoitem.module.css'

function Todolist({data,title,id,status,handleDelete}){

  const [status1,setStatus1]=useState(status)
  const [toggle,setToogle]=useState('')
  return <div>
    <h2 className={toggle}>{title}</h2>
    <p>{status1?"Done":"Do the task"}</p>
    <button onClick={()=>{
      if(status1){
        setStatus1(false)
      }
      else{
       console.log(status1)
        setStatus1(true)
      }
      axios.put(`http://localhost:3000/todos/${id}`,{
        title:title,
        status:!status1,
      })
    }}  className={styles.buttons}>Change status</button>
    <button className={styles.buttons} onClick={()=>{
      data= data.filter(item=>item.id!==id)
      axios.delete(`http://localhost:3000/todos/${id}`) 
      handleDelete(data)
    }}>Delete task</button>
  </div>
}
export {Todolist}