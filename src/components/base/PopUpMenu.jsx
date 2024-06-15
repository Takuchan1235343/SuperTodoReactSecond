import {useState, useRef, useEffect} from 'react';
import {StatusComboBox} from "../StatusComboBox";
import {PriorityComboBox} from "../PriorityComboBox";
import {Calendar} from "../Calendar";
import {MemoComponent} from "../Memo";
import {createPortal} from "react-dom";

export const PopUpMenu = (props) => {
    const {task} = props;

    const [isShown, setIsShown] = useState(false);
    const menuRef = useRef(null);

    const handleToggleMenu = (e) => {
        e.stopPropagation()
        setIsShown(prevIsShown => !prevIsShown);
    };

    const handleClickOutside = (e) => {

        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsShown(false);
        }
    };

    useEffect(() => {
        if (isShown) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isShown]);

    return (
        <div className='popup-menu-container items-center bg-white rounded-lg'>
            {!isShown && (
                <button
                    onClick={handleToggleMenu}
                    className={'border-2 rounded-lg px-4 font-mono min-w-24 mx-auto'}
                >
                    Menu
                </button>
            )}


            {isShown && createPortal(
                <div

                    ref={menuRef}
                    className=' z-10 p-4 bg-white rounded-lg transform transition-transform border-2'
                >
                    <StatusComboBox className="mx-1" task={task}/>
                    <PriorityComboBox className="mx-1" task={task}/>
                    <Calendar className="mx-1" task={task}/>
                    <MemoComponent className="mx-1" task={task}/>
                </div>,
                document.getElementById('portal-root')
            )}
        </div>
    );
}
