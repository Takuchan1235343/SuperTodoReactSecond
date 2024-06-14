export const ErrorMessage = (props) => {
    const {children} = props

    return (
        <p className="text-red-600 text-[14px] mt-2.5">{children}</p>
    )
}
