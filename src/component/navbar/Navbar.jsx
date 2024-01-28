import React from 'react'
import logo from "../../assets/icon.png"

function Navbar() {
    return (
        <div
            className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-4'>
            <div className="left">
                <div className="logo font-bold text-2xl text-white text-center">
                    {/* <img className=' w-44' src={logo} alt="" /> */}
                    <h1 className=" text-4xl font-bolder  "  > V I S U A L </h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar