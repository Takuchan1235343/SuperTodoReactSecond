export const Input = (props) => {
  const { value, onChange, placeholder, type } = props

  return (
    <input
      className="border-none rounded-lg p-1.5 px-4"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}