const style = {
  color: 'red',
  fontSize: '14px',
  marginTop: '10px',
}

export const ErrorMessage = (props) => {
  const { children } = props

  return (
    <p style={style}>{children}</p>
  )
}
