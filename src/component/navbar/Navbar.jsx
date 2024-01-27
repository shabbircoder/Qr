import React from 'react'
import logo from "../../assets/qr.png"

function Navbar() {
    return (
        <div className='main px-4  py-4 shadow-md flex justify-center'>
            {/* main content  */}
            <div className="">
                {/* react image  */}
                <div className="flex justify-center mb-2">
                    <img className='w-28' src={logo}
                        alt="img" />
                </div>

                {/* heading  */}
                <div className="heading">
                    <span className='text-2xl  text-white font-bold'> QR Code Generator</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar