import React from 'react'

const UserProfile = (props) => {
    console.log('props in Userprofile', props)
    return (
        <div>
            <h3>Check your profile</h3>
            <p>User name: {props.data.name}</p>
            <p>User email: {props.data.email}</p>
            <p>User role: {props.data.role}</p>
        </div>
    )
}

export default UserProfile;