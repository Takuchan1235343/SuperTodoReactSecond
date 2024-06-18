import {useHoverStyle} from '../../hooks/useHoverStyle'

export const Button = ({children, onClick}) => {
    const {isHovered, bind, disabled} = useHoverStyle()

    return (
        <button
            type={'button'}

            className={`${isHovered ? 'bg-[#79a8a9] text-white' : 'bg-white text-initial'} cursor-pointer border-2 rounded-lg px-4 font-mono min-w-32 mx-auto`}

            onClick={onClick} {...bind}
            disabled={disabled}
        >
            {children}
        </button>
    )
}