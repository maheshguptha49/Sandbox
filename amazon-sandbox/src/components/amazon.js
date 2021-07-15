

let Amazon=({styles2,obj,cname,images})=>{
 
let {date,logo,cs,ag,pay,dm}=obj
// console.log(cname)
return <div style ={styles2} className={cname}>
  <div>
  <div>{date}</div>
  <div  className={images}><img src={logo} alt={ag}/></div>
  </div>
  <div>{cs}</div>
  <div>{ag}</div>
  <div>{pay}</div>
  <div>
    <div>{dm}</div>
    <div> <img src="https://i.pinimg.com/originals/87/94/25/879425da2db6f7b2e4ffd03264a0a6a6.png" alt="arrow"/></div>
  </div>


</div>
}
export {Amazon}