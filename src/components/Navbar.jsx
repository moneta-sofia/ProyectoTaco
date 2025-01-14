import { IoMenu, IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className='fixed xl:top-100 top-5 xl:right-10 right-5 z-40'>
				<button className=" bg-slate-100 p-4 rounded-full cursor-pointer select-none text-3xl flex xl:flex-row flex-col xl:items-center items-start align-center text-black z-40" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <IoCloseOutline className="text-black" /> : <IoMenu className="text-black" />}
					{/* <p className="text-black ">Hi !</p> */}
				</button>
				{isOpen && (
					<>
						<div className={`blur w-screen h-screen fixed inset-0 ${isOpen ? 'md:hidden flex' : 'hidden'}  `}></div>
						<div className="w-fit h-fit bg-slate-100 p-4 mt-3 rounded-xl ">
							<Link activeClass="active" to="../characterDesign" onClick={() => setIsOpen(false)} className="my-2 cursor-pointer ">
								Character Design
							</Link>
							<hr className="w-full " />
							<Link activeClass="active" to="../animation" onClick={() => setIsOpen(false)} className="my-2 cursor-pointer">
								Animation
							</Link>
							<hr className="w-full " />
							<Link activeClass="active" to="../backgroundDesign" onClick={() => setIsOpen(false)} className="my-2 cursor-pointer">
								Background Design
							</Link>
							<hr className="w-full " />
							<Link activeClass="active" to="../illustration" onClick={() => setIsOpen(false)} className="my-2 cursor-pointer">
								Ilustration
							</Link>
							<hr className="w-full " />
							<Link activeClass="active" to="animation" onClick={() => setIsOpen(false)} className="my-2 cursor-pointer">
                                Animation
							</Link>
						</div>
					</>
				)}
			</div>
		</>
	);
}
