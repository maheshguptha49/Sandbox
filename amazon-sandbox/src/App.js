import styles from './styles.module.css'
import {Amazon} from './components/amazon.js'
 
export default function App() {
  // date,logo,cs,ag,pay,dm
  let compstyles1={
      background:"rgb(255,165,0)",
  }
  let compstyles2={
    background:"white",
}
  const elements={
    date:"28/10/2020",
    logo:"https://pngimg.com/uploads/amazon/small/amazon_PNG27.png",
    cs:"Case Study",
    ag:"Amazon Gift",
    pay:"Pay",
    dm:"Desktop - Mobile",
  }
  const elements1={
    date:"17 Sep 2020",
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/758px-Apple_logo_black.svg.png",
    cs:"Case Study",
    ag:"Apple Gift",
    pay:"Payment",
    dm:"Mac OS - Mobile",
  }
  // console.log(styles,"styh")
  console.log(compstyles1)
  return (
    <div className="App">
    <Amazon styles2={compstyles1} obj={elements} cname={styles.body} />
    <Amazon styles2={compstyles2} obj={elements1} cname={styles.body} images={styles.images} />
    </div>
  );
}
