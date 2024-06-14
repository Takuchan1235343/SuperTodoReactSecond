import {useHoverStyle} from '../../hooks/useHoverStyle'
import classNames from 'classnames'

export const Button = ({children, onClick}) => {
    const {isHovered, bind, disabled} = useHoverStyle()

    return (
        <button
            type={'button'}
            className={classNames(
                'cursor-pointer border-2 rounded-lg px-4 font-mono min-w-24 mx-auto',
                {
                    'bg-[#79a8a9] text-white': isHovered,
                    'bg-[#dddddd] text-initial': !isHovered,
                }
            )}
            onClick={onClick} {...bind}
            // disabled={disabled}
        >
            {children}
        </button>
    )
}