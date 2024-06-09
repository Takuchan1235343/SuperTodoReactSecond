const style = {
  fontSize: 20,
  marginRight: 20,
}

export const Welcome = (props) => {

  const { user } = props
  return (
    <div style={style}>Welcome, {user.email}</div>
  )
}