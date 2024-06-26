import {useRef, useEffect, useCallback} from 'react'
import {useToggle} from '../hooks/useToggle'
import {CategoryComboBox} from './CategoryComboBox'
import {PriorityMatrix} from './PriorityMatrix'
import {Calendar} from './Calendar'
import {MemoComponent} from './Memo'
import {createPortal} from 'react-dom'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const PopUpMenu = (props) => {
    const {task} = props

    const {isShown: isShownMenu, handleToggle: handleToggleMenu, targetRef: menuRef} = useToggle()

    const buttonRef = useRef(null)

    return (

        <div className="popup-menu-container items-center">

            <button
                ref={buttonRef}
                onClick={handleToggleMenu}
                className='border-2 bg-white rounded-lg px-4 font-mono min-w-24 mx-auto'
            >
                <FontAwesomeIcon icon={faBars}/>
            </button>

            {isShownMenu && (
                <MenuTab task={task} menuRef={menuRef} buttonRef={buttonRef}/>
            )}
        </div>
    )
}

const MenuTab = ({task, menuRef, buttonRef}) => {

    const setPosition = useCallback(() => {
        const {bottom, left} = buttonRef.current.getBoundingClientRect()
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
        <ul
            ref={menuRef}
            className="flex flex-col z-10 p-4 bg-white rounded-lg fixed border-2"
        >
            <CategoryComboBox className="mx-1" task={task}/>
            <PriorityMatrix className="mx-1" task={task}/>
            <Calendar className="mx-1" task={task}/>
            <MemoComponent className="mx-1" task={task}/>
        </ul>,
        document.body
    )
}

