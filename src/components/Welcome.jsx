import React from 'react'

export const Welcome = (props) => {
  const { user } = props
  return (
    <div className="text-xl mr-5">Welcome, {user.email}</div>
  )
}