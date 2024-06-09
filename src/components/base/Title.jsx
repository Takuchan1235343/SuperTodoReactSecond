const style = {
  textAlign: 'center',
  marginTop: 0,
  fontWeight: 'bold',
}

export const Title = (props) => {
  const { title } = props

  return (
    <h1 style={style}>{title}</h1>
  )
}