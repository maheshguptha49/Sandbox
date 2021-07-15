import axios from "axios";
import { useEffect } from "react";
import { Todo } from "./components/todoinput";
import "./styles.css";

export default function App() {
 
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Todo/>
    </div>
  );
}
