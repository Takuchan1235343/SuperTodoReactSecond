import {useHoverStyle} from '../../hooks/useHoverStyle'
import classNames from 'classnames'

export const Button = ({children, onClick}) => {
    const {isHovered, bind, disabled} = useHoverStyle()

    return (
        <button
            type={'button'}
            className={classNames(
                'cursor-pointer border-2 rounded-lg p-1 px-4 m-0 mx-0.5 max-h-16 font-mono',
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