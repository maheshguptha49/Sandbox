import "./styles.css";
import {RestComp} from './components/restdetails.js'
import {UserInput} from './components/userinput.js'
import { useState } from "react";
import { Hello } from "./components/dataadd";
export default function App() {
  const[arr,setarr]=useState([])
 
  console.log(arr.length)
  return (
    <div className="App">
      <UserInput/>
      {/* <Hello/> */}
    </div>
  );
}
