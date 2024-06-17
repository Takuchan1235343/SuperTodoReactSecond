import {useState, useRef, useEffect} from 'react'

export const useToggle = () => {
    const [isShown, setIsShown] = useState(false)
    const menuRef = useRef(null)

    const handleToggle = (e) => {
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

    return {isShown, handleToggle, menuRef}


}