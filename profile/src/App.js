import "./styles.css";
import { Profile } from "./components/profile.js";
// https://h1ytz.csb.app/ sandbox link
export default function App() {
  console.log("hello")
  // let {pro,image,name,city,job,skills}=obj
  const profile={
    pro:"PRO",
    name:"Tony Soprano",
    image:"https://m.media-amazon.com/images/I/9136Rv8nxiL._SS500_.jpg",
    city:"New Jersey",
    job:"UI interface designer and front end developer",
    skills:["UI/UX","Front end development","HTML","CSS","Jaa Script","React","Node"]
  }
  return (
    <div className="App">
      <Profile obj={profile}/>
    </div>
  );
}
