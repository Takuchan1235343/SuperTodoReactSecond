import React, { useMemo } from 'react'
import { useHoverStyle } from '../../hooks/useHoverStyle'

const styleFactory = (isHovered) => ({
  backgroundColor: isHovered ? '#79a8a9' : '#dddddd',
  color: isHovered ? 'white' : 'initial',
  cursor: 'pointer',
  borderRadius: '8px',
  border: 'none',
  padding: '4px 16px',
  margin: '0 2px',
})

export const Button = ({ children, onClick }) => {
  const { isHovered, bind } = useHoverStyle()

  const style = useMemo(() => styleFactory(isHovered), [isHovered])

  return (
    <button
      style={style}
      onClick={onClick} {...bind}>
      {children}
    </button>
  )
}