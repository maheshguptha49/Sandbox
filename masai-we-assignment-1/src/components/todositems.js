let TodosItem=({element})=>{
  return <div>
    <h3>{element.text}</h3>
    status:{element.status?"done":"notdone"}
  </div>
}
export {TodosItem}