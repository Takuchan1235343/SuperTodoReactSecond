import {useState, useRef, useEffect} from 'react';
import {StatusComboBox} from "../StatusComboBox";
import {PriorityComboBox} from "../PriorityComboBox";
import {Calendar} from "../Calendar";
import {MemoComponent} from "../Memo";

export const PopUpMenu = (props) => {
    const {task} = props;

    const [isShown, setIsShown] = useState(false);
    const menuRef = useRef(null)

    const handleToggleMenu = () => {
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
    }, [])

    return (
        <div
            className='popup-menu-container items-center '>
            <button
                onClick={handleToggleMenu}
                className={'border-2 rounded-lg px-4 font-mono min-w-24 mx-auto'}
            >
                Menu
            </button>

            {isShown && (
                <div
                    className='z-10 p-4 bg-neutral-50　rounded-lg transform transition-transform  border-2'
                >
                    <div>menu</div>
                    <StatusComboBox className="mx-1" task={task}/>
                    <PriorityComboBox className="mx-1" task={task}/>
                    <Calendar className="mx-1" task={task}/>
                    <MemoComponent className="mx-1"/>
                </div>
            )}
        </div>
    );
}