import React from "react";
import UserContext from "../userContext/UserContext";

function Profile() {
    
    const {user} = React.useContext(UserContext)

    if(!user) {
        return <h2>Please login to view your profile</h2>
    }

    return (
        <div>
            <h2>Profile</h2>
            <p>Username: {user.username}</p>
        </div>
    )
}

export default Profile;