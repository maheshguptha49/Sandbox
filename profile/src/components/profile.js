
import styles from './profile.module.css'

let Profile=({obj})=>{
  let {pro,image,name,city,job,skills}=obj
  console.log(styles)
  return (
    <>
    <div className={styles.main}>
      <div>
        <div>{pro}</div>
        <img src={image} alt="Profile pic"/>
      </div>
      <div>{name}</div>
      <div>{city}</div>
      <div>{job}</div>
      <div>
        <div>Message</div>
        <div>Following</div>
      </div>
    </div>
    <div>
    <div className={styles.main2}> 
    <p>Skills</p>
      <div>
      {skills.map((el)=>{
        return <div>{el}</div>
      })}
      </div>
    </div>
    </div>
    </>
  )
}


export {Profile}