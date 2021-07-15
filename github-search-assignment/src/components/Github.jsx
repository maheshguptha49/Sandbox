import axios from "axios"
import { useState } from "react"
import { Gitcomp } from "./Gitcomp"
import {v4 as uuid} from 'uuid'


export function GithubComponent(){
  const [arr,setarr]=useState([])
  const [search,setSearch]=useState("")
  const handleChange=(e)=>{
     setSearch(e.target.value)
  }
  const handleSearch= async ()=>{
     let {data}=await axios.get("https://api.github.com/search/users",{
       params:{
         q:search
       }
     })
     setarr(data.items)
     console.log(data.items)
  }
  // console.log(search)
   return (<div>
     <h1>Github search</h1>
     <input type="text" value={search} onChange={handleChange}/>
     <button onClick={handleSearch}>search</button>
     <div style={{display:"flex",flexWrap:"wrap"}}>{arr.map((item)=>{
        return <Gitcomp key={uuid()} {...item}/>
     })}</div>
   </div>)
   
}
//repos_url,avatar_url,login