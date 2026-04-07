import {userStore} from "../store/userStore.js"
import AddUser from "../components/AddUser.jsx"
import {useState} from "react"

export default function UserProfile(){
    const currentUser = userStore(state => state.currentUser);
    const [showUser, setShowUser] = useState(false)

    function showUserFn() {
        setShowUser(prev => !prev)
    }

    return currentUser?(<div>
            <div>
                {currentUser.id}
            </div>
            <div>{currentUser.name}</div>
            <div>{currentUser.email}</div>

            <div>
            <button style={{display: showUser? "none": "block"}} onClick={showUserFn}>Add User</button>
             <AddUser show={showUser} showUserFn={showUserFn} />
            </div>
    </div>) : <div>No User Found</div>
    
}