// const style = {
//   fontSize: 20,
//   marginRight: 20,
// }

export const Welcome = (props) => {

  const { user } = props
  return (
    <div className="text-xl mr-5 ">Welcome, {user.email}</div>
  )
}