import React from 'react'

const UserProfile = (props) => {
    console.log('props in Userprofile', props)
    return (
        <div>
            <h3>User Profile</h3>
            <p>User name: {props.data.name}</p>
            <p>User email: {props.data.email}</p>
            <p>User password: {props.data.password}</p>
        </div>
    )
}

export default UserProfile;