export const Form = ({children, onSubmit, className}) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit()
    }

    return (
        <form onSubmit={handleSubmit} className={className}>
            {children}
        </form>
    )
}
