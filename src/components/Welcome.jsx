import React from 'react'

export const Welcome = (props) => {
    const {user} = props
    return (
        <div className="text-amber-50 min-w-96 text-2xl  p-4 ">
            Welcome, {user.displayName}さん
        </div>
    )
}