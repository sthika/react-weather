import React from 'react'
import Popup from './Popup'
import Search from './Search'
import { useState } from 'react'

const Header = ({setDesc, handleInput, handleKeyDown}) => {

// const [desc, setDesc] = useState("")

// const handleInput = (e) => {
//     setDesc(e.target.value)
// }
// const handleKeyDown = (e) => {
//     if (e.target.value !== "" && e.key === "Enter") {
//         setInpDesc(desc)
//     }
// }

    return (
        <div className="header">
            <div className="container mx-auto">
                <div className="header__wrapper p-3 flex items-center justify-between">
                    <div className="header__logowrap flex items-center gap-1.5">
                        <div className="header__logo w-16 h-16 p-1 bg-white flex items-end	">
                            <p className='text-xs/[13px] text-slate-800 font-bold	'>The weather channel</p>
                        </div>
                        <p className='text-white'>An IBM Business</p>
                    </div>
                    <Search setDesc={setDesc} handleInput={handleInput} handleKeyDown={handleKeyDown}/>
                    <Popup />
                </div>
            </div >
        </div >
    )
}

export default Header