import { useState,useEffect } from "react"
import {RestList} from './restlist.js'
import {v4 as uuid} from 'uuid'
import data99 from '../data.json'

console.log(data99,"hello")

let data1=["image","name","specials",'oneprice','mprice','time','rating','votes','treviews']
let obj={}
let addkeys=()=>{
for(let i=0;i<data1.length;i++){
   obj[data1[i]]=""
}
}
addkeys()

let promise=[]
let UserInput=()=>{
  const [arr,setarr]=useState(promise)
  async function getData(){
   try{
    let res=await fetch("http://localhost:3000/todos/2")
    let res1=await res.json()
    promise=res1
    setarr2(promise)
    setarr(promise)
   }catch(err){
     console.log(err)
     setarr(data99)
     setarr2(data99)
   }
 }
//  let getData1=useEffect()
useEffect(() => {
  getData()
}, []); 


  const [formdata,setFormdata]=useState(obj)
  const handleChange=(e)=>{
   formdata[e.target.name]=e.target.value
   setFormdata(formdata)
  }
  const handleChange2=(e)=>{
    if(e.target.value==="cash"||e.target.value==="online"||e.target.value==="credit"||e.target.value==="debit"||e.target.value==="upi"){
    formdata[e.target.name]={[e.target.value]:true}
    }
    setFormdata(formdata)
  }
  const [arr2,setarr2]=useState(arr)

  let submitData=()=>{
    setarr([...arr,formdata])
    setarr2([...arr,formdata])
   
  }
  const updateArr=(data)=>{
    setarr2(data)
  }
  const sortArr=()=>{
    console.log("hello")
    setarr2((arr2)=>[...arr2.sort((a,b)=>{
      return a.oneprice-b.oneprice
    })])
  }
  const sortArr2=()=>{
    setarr2((arr2)=>[...arr2.sort((a,b)=>{
      return b.oneprice-a.oneprice
    })])  }
  return <>
  <h1>Add your restaurant</h1>
  <form style ={{display:'flex',flexWrap:'wrap'}}onSubmit={((e)=>{
          e.preventDefault()})}>
            {data1.map((el)=>{
              return <input style={{padding:'5px',margin:'10px'}} key ={uuid()}type="text" placeholder ={el} name={el} onChange={handleChange}/>
            })}
            <input style={{padding:'5px',margin:'10px'}} type="text" placeholder="payment methods" name="payments" onChange={handleChange2}/>
            <button style={{padding:'5px',margin:'10px'}} onClick={submitData}>Submit</button>
  </form>
  <div>
    <RestList sortArr={sortArr} updateArr={updateArr} sortArr2={sortArr2} arr2={arr2} arr={arr}/>
  </div>
  
  </>
}
export {UserInput}