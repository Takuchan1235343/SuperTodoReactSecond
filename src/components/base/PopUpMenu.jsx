import { useState, useRef, useEffect, useCallback } from 'react'
import { StatusComboBox } from '../StatusComboBox'
import { PriorityComboBox } from '../PriorityComboBox'
import { Calendar } from '../Calendar'
import { MemoComponent } from '../Memo'
import { createPortal } from 'react-dom'

export const PopUpMenu = (props) => {
  const { task } = props

  const [isShown, setIsShown] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const handleToggleMenu = (e) => {
    e.stopPropagation()
    setIsShown(prevIsShown => !prevIsShown)
  }

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsShown(false)
    }
  }

  useEffect(() => {
    if (isShown) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isShown])

  return (

    <div className="popup-menu-container items-center">

      <button
        ref={buttonRef}
        onClick={handleToggleMenu}
        className={'border-2 bg-white rounded-lg px-4 font-mono min-w-24 mx-auto'}
      >
        Menu
      </button>

      {isShown && (
        <MenuTab task={task} menuRef={menuRef} buttonRef={buttonRef}/>
      )}
    </div>
  )
}

const MenuTab = ({ task, menuRef, buttonRef }) => {

  const setPosition = useCallback(() => {
    const { bottom, left } = buttonRef.current.getBoundingClientRect()
    menuRef.current.style.top = `${bottom}px`
    menuRef.current.style.left = `${left}px`
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', setPosition)
    window.addEventListener('resize', setPosition)
    setPosition()
    return () => {
      window.removeEventListener('scroll', setPosition)
      window.removeEventListener('resize', setPosition)
    }
  }, [])

  return createPortal(
    <div
      ref={menuRef}
      className="z-10 p-4 bg-white rounded-lg fixed border-2"
    >
      <StatusComboBox className="mx-1" task={task}/>
      <PriorityComboBox className="mx-1" task={task}/>
      <Calendar className="mx-1" task={task}/>
      <MemoComponent className="mx-1" task={task}/>
    </div>,
    document.body
  )
}

