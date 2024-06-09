import { useHoverStyle } from '../../hooks/useHoverStyle'
import classNames from 'classnames'

export const Button = ({ children, onClick }) => {
  const { isHovered, bind } = useHoverStyle()

  return (
    <button
      className={classNames(
        'cursor-pointer border-2 rounded-lg p-1 px-4 m-0 mx-0.5',
        {
          'bg-[#79a8a9] text-white': isHovered,
          'bg-[#dddddd] text-initial': !isHovered,
        }
      )}
      onClick={onClick} {...bind}>
      {children}
    </button>
  )
}