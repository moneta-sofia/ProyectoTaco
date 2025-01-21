import { IoMenu, IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="self-start z-10 pointer-events-auto flex flex-col items-end">
				<button className=" bg-black p-4 rounded-full w-fit cursor-pointer select-none text-3xl flex xl:flex-row flex-col xl:items-center items-start align-center text-white z-40" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <IoCloseOutline /> : <IoMenu />}
				</button>
				{isOpen && (
					<>
						<div className={`blur w-screen h-screen fixed inset-0 ${isOpen ? 'md:hidden flex' : 'hidden'}  `}></div>
						<div className="w-fit h-fit bg-black p-4 mt-3 rounded-xl text-end">
							<NavLink activeClass="active" to="/backgroundDesign" onClick={() => setIsOpen(false)} className=" text-white cursor-pointer">
								Background Design
							</NavLink>
							<hr className="w-full my-2" />

							<NavLink activeClass="active" to="/characterDesign" onClick={() => setIsOpen(false)} className=" text-white cursor-pointer ">
								Character Design
							</NavLink>
							<hr className="w-full my-2" />

							<NavLink activeClass="active" to="/animation" onClick={() => setIsOpen(false)} className=" text-white cursor-pointer">
								Animation
							</NavLink>
							<hr className="w-full my-2" />

							<NavLink activeClass="active" to="/illustration" onClick={() => setIsOpen(false)} className=" text-white cursor-pointer">
								Ilustration
							</NavLink>
						</div>
					</>
				)}
			</div>
		</>
	);
}
