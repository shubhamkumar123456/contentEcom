import React, { useState } from 'react'
import UserContext from './UserContext'
const UserState = (props) => {
    let loginDetails = JSON.parse(localStorage.getItem('ecomLogin'))
    const [user, setUser] = useState({
        name:loginDetails ? loginDetails.name : '',
        email:loginDetails ? loginDetails.email : '',
        // profileImage:'',
        login:loginDetails ?  loginDetails.login : false
    });
  return (
    <UserContext.Provider value={{user, setUser}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState
