import { useState } from "react"
import styles from './todo.module.css'
// import links from 'todomvc-app-css'

function Todolist({data,title,id,status,handleDelete}){
  const [status1,setStatus1]=useState(status)
  const [toggle,setToogle]=useState('')
  return <div>
    <h2 className={toggle}>{title}</h2>
    <p>{status1?"Done":"Do the task"}</p>
    <button onClick={()=>{
      for(let i=0;i<data.length;i++){
        if(data[i].id===id){
          if(data[i].status){
            data[i].status=false
            setToogle(styles.false)
            setStatus1(false)
          }
          else{
            data[i].status=true
            setToogle(styles.task)
            setStatus1(true)
          }
        }
      }
    }}  className={styles.buttons}>Change status</button>
    <button className={styles.buttons} onClick={()=>{
      data= data.filter(item=>item.id!==id)
      handleDelete(data)
    }}>Delete task</button>
  </div>
}
export {Todolist}