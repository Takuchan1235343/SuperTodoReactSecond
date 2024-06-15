import React, {useState} from 'react';

export const PopUpMenu = () => {

    const [isShown, setIsShown] = useState(false);

    const handleToggleMenu = () => {
        setIsShown(true);
    }

    const handleCloseMenu = () => {
        setIsShown(false);

    }

    return (
        <div className='popup-menu-container '>
            <button
                onClick={handleToggleMenu}
                className={'bg-blue-500 text-white py-1 px-2 rounded-lg'}
            >
                ToggleMenu
            </button>
            <div
                className={` ${isShown ? 'scale-100' : 'scale-0'} absolute　z-10 w-40 mt-2 p-4 bg-neutral-50　rounded-lg transform transition-transform  border-2`}
            >
                <div>menu</div>


                <button onClick={handleCloseMenu}>
                    close Menu
                </button>
            </div>
        </div>
    );
}