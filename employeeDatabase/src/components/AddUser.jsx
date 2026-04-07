import {useState} from "react"
import {userStore} from "../store/userStore.js"
export default function AddUser({showUserFn, show}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const addUser = userStore(state => state.addUser)

    function handleClick() {
        addUser({
            id: Date.now(),
            name,
            email
        })
        showUserFn();
    }

    return (
        <div style={{display: show? "block": "none", width: "40vw"}}>
           <div style={{display: "flex", flexDirection: "column"}}>
           <span onClick={showUserFn}>X</span>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name..." />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Adddress" />
            <button onClick={handleClick} disabled={!name || !email}>Submit</button>
           </div>
    </div>
    )
}