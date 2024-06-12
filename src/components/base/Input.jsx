export const Input = (props) => {
    const {value, onChange, placeholder, type, disabled, onEnter} = props

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onEnter()
        }
    }

    return (
        <input
            // disabled={disabled}
            className="border-none min-w-96 text-center rounded-lg p-1.5 m-2"
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
        />
    )
}