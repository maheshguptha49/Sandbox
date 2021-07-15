import { useState } from "react"

let Forms=()=>{
  const [formdata,setformdata]=useState({})
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const handlechange=(e)=>{
    let data={
      ...formdata,
      [e.target.name]:e.target.value,
    }
    console.log(data,"jja")
    setformdata(data)
  }
return <form onSubmit={handleSubmit}>
  <input type ="text" placeholder='name' name='name' onClick={handlechange} />
  <input type ="text" placeholder='age' name='age' onClick={handlechange} />
  <input type ="text" placeholder='password' name='password' onClick={handlechange} />
  <input type ="text" placeholder='city' name='city' onClick={handlechange} />
  <button type="submit" value="submit">Submit</button>
     </form>
}
export {Forms}