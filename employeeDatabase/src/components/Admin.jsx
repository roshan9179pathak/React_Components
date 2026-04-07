import {useState} from "react"
import {userStore} from "../store/userStore.js"
function Admin() {
   const allUsers =  userStore(state => state.allUsers);
   const deleteUser = userStore(state => state.deleteUser);
   const updateUser = userStore(state => state.updateCurrentUser)
  
  return allUsers? 
  (<div>
    {allUsers.map((elem) =>(
        <div onClick={()=> updateUser(elem.id)} style={{display: "flex"}} key={elem.id}>
            <p>{elem.name}</p>
            <button onClick={()=> deleteUser(elem.id)} >X</button>
        </div>
    ))}
  </div>) : <div></div>
}

export default Admin;