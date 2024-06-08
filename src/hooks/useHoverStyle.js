import { useState } from 'react'

export const useHoverStyle = () => {
  const [isHovered, setIsHovered] = useState(false)

  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)
  const bind = {
    onMouseEnter,
    onMouseLeave,
  }

  return { isHovered, bind }
}