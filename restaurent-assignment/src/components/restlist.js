import {RestComp} from './restdetails.js'
import {v4 as uuid} from 'uuid'
import { useState } from 'react'

let RestList=({sortArr,sortArr2,updateArr,arr2,arr})=>{
    
  return <>
     <div>
      
     <h3>Sort By ratings</h3>
     <div>
      {[4,3,2,1].map((el)=>{
         return <button style={{cursor:'pointer',margin:'10px'}} onClick={()=>{
            let data5=arr.filter(item=> item.rating>el)
            updateArr(data5)
         }}>{el}</button>
        })}
        <button onClick={()=>{
          updateArr(arr)
        }}>Reset</button>
     </div>
     <h3>Sort by payment</h3>
     <div>
       {[{online:"card"},{cash:"cash"},{upi:"upi"}].map((item)=>{
         for(let key in item ){
          return <button style={{cursor:'pointer',margin:'10px'}} onClick={()=>{
            let data6=arr.filter(item =>item.payments[key]===true)
            updateArr(data6)
          }}   >{item[key]}</button>
         }
       })}
     </div>
     <div>
        <button onClick={()=>{
           let data7=arr.sort((a,b)=>{
             return a.oneprice-b.oneprice
           })
           sortArr()
        }}>Sort low to high</button>
        <button onClick={()=>{
           let data7=arr.sort((a,b)=>{
             return b.oneprice-a.oneprice
           })
          sortArr2()
           updateArr(data7)
        }}>Sort low to high</button>
     </div>
     </div>
  <div>{arr2.length>0?arr2.map((el)=>{
    return <RestComp key={uuid()} obj={el}/>
  }):<span>loading...</span>}</div>
   
  </>
}
export {RestList}