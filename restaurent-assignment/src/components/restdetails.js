import styles from './restdetails.module.css'

let RestComp=({obj})=>{
  let {image,name,specials,oneprice,mprice,time,payments,rating,votes,treviews}=obj
  let tpayments=[]
  let paymentsfilter=()=>{
     for(let key in payments){
       if(payments[key]===true){
         tpayments.push(key)
       }
     }
  }
  paymentsfilter()
  return<div>
     <div className={styles.cont1}>

    <div><img src={image} alt='restro imag'/></div>
    <div className={styles.mcont}>
    <div>{name}</div>
    <div>{specials}</div>
    <div>Cost ₹{oneprice}</div>
    <div>Min ₹{mprice} * Up to {time} min</div>
    <div>Accepts {tpayments.map((el)=>{
      return <span>{el} </span>
    })}Payments only</div>
    </div>
    <div>
       <div>{rating}</div>
       <div>{votes} votes</div>
       <div>{treviews} reviews</div>
    </div>
    
  </div>
  <div><span>Order Online</span></div>
  </div>
}
export{RestComp}