const style = {
  borderRadius: '8px',
  border: 'none',
  padding: '6px 16px',
}

export const Input = (props) => {
  const { value, onChange, placeholder, type } = props

  return (
    <input
      style={style}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}