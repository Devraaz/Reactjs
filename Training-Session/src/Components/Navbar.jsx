import React, { useState, useRef } from 'react'
import logo from '../assets/tick-circle 1.png'
import { FaHamburger, FaCross } from 'react-icons/fa'
import { BsBellFill, BsBellSlash  } from "react-icons/bs";

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const openMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <nav className='border h-15 w-screen p-1 px-8 flex justify-between items-center '>
                <div className="logo">
                    <img src={logo} alt="logo" class="" />
                </div>
                <div className="hidden sm:flex flex-row space-x-5">
                    <a href="/" className='font-medium text-md text-slate-600 hover:text-slate-950'>Home</a>
                    <a href="/" className='font-medium text-md text-slate-600 hover:text-slate-950'>About</a>
                    <a href="/" className='font-medium text-md text-slate-600 hover:text-slate-950'>Serivce</a>
                    <a href="/" className='font-medium text-md text-slate-600 hover:text-slate-950'>Contact</a>
                </div>
                <div className="button hidden sm:block">
                    <button className="bg-red-600 hover:bg-red-500 p-1 px-5 text-white rounded-md transition-all">LOGIN</button>
                </div>

                <button className="block sm:hidden">
                    <BsBellFill className=" text-slate-800" onClick={openMenu} />
                </button>
            </nav>

            <div className="bg-slate-300 w-96 h-screen space-y-8 p-5 absolute right-0 pt-14 z-10 sm:hidden transition-all"  style={{ top: menu ? '0px' : '-1000px'}}>
                <BsBellSlash className=" text-slate-800 absolute right-8 top-6"  onClick={openMenu} />
                <div className=" flex flex-col space-y-5">
                    <a href="/" className='font-medium text-md text-slate-600 hover:text-slate-950 w-fit'>Home</a>
                    <a href="/" className='font-medium text-md text-slate-600 hover:text-slate-950 w-fit'>About</a>
                    <a href="/" className='font-medium text-md text-slate-600 hover:text-slate-950 w-fit'>Serivce</a>
                    <a href="/" className='font-medium text-md text-slate-600 hover:text-slate-950 w-fit'>Contact</a>
                </div>
                <div className="block">
                    <button className="bg-red-600 hover:bg-red-500 p-1 px-5 text-white rounded-md transition-all">LOGIN</button>
                </div>
            </div>
        </>
    )
}

export default Navbar