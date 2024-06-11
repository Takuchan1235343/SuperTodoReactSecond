import React from 'react'

export const Welcome = (props) => {
  const { user } = props
  return (
    <div className="text-amber-50 text-2xl p-2 ">Welcome, {user.email}</div>
  )
}