export function Gitcomp({html_url,avatar_url,login}){
  //repos_url,avatar_url,login
   return (
     <div style={{border:'1px solid black'}}>
     <img style={{width:"40%"}} src={avatar_url} alt="" srcset=""/>
     <div>{login}</div>
     <a href={html_url} target="blank">Profile Link</a>
     </div>
   )
}