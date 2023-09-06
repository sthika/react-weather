import React from 'react';
import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

const Popup = () => {
    const [popup, setPopup] = useState(false)

    return (
        <div className="popup">
            <button onClick={() => setPopup(true)}>KG | °C</button>

            {popup && (
                <ClickAwayListener onClickAway={() => setPopup(false)}>
                    <div className={'popup__item'}>
                        <li>Items of the Popup</li>
                        <li>Items of the Popup</li>
                        <li>Items of the Popup</li>
                    </div>
                </ClickAwayListener>
            )}
        </div>
    )
}
export default Popup