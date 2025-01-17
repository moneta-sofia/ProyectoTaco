import { IoMenu, IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="transition-transform  self-start z-10 pointer-events-auto flex flex-col items-end">
                <button className={`transition-transform bg-black p-4 rounded-full w-fit cursor-pointer select-none text-3xl flex xl:flex-row flex-col xl:items-center items-start align-center text-white z-40 ${isOpen ? "rotate" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoCloseOutline /> : <IoMenu />}
                </button>
                <div className={`blur w-screen h-screen fixed inset-0 ${isOpen ? 'md:hidden flex' : 'hidden'}`} onClick={() => setIsOpen(false)}></div>
                <div className={`w-fit h-fit bg-black p-4 mt-3 rounded-xl text-end transition-transform ${isOpen ? 'fade fade-in' : 'fade fade-out'}`}>
                    <NavLink to="/backgroundDesign" onClick={() => setIsOpen(false)} className="text-white cursor-pointer">
                        Background Design
                    </NavLink>
                    <hr className="w-full my-2" />

                    <NavLink to="/characterDesign" onClick={() => setIsOpen(false)} className="text-white cursor-pointer ">
                        Character Design
                    </NavLink>
                    <hr className="w-full my-2" />

                    <NavLink to="/animation" onClick={() => setIsOpen(false)} className="text-white cursor-pointer">
                        Animation
                    </NavLink>
                    <hr className="w-full my-2" />

                    <NavLink to="/illustration" onClick={() => setIsOpen(false)} className="text-white cursor-pointer">
                        Ilustration
                    </NavLink>
                </div>
            </div>
        </>
    );
}
