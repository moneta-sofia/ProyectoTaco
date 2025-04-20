import { useState } from 'react';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaTiktok, FaBluesky } from 'react-icons/fa6';
import { IoDocumentTextOutline } from 'react-icons/io5';
// import { RiTwitterXFill } from 'react-icons/ri';
// import emailjs from '@emailjs/browser';
// import toast, { Toaster } from 'react-hot-toast';
import ModalTacoInfo from './ModalTacoInfo';

export default function TacosInfo() {
	const [modalInfo, setModalInfo] = useState(false);
	// const form = useRef();

	// const handlerEmail = (e) => {
	// 	e.preventDefault();
	// 	toast
	// 		.promise(
	//             emailjs.sendForm("service_taco", "template_mxgw4ua", form.current, "GRinZEICKiSrZx_GT"),
	//             {
	//                 loading: 'Sending...',
	//                 success: <b>Mail sended!</b>,
	//                 error: <b>Could not send the mail :(</b>,
	//             })
	// 		.then(
	// 			() => {
	// 				form.current.reset();
	// 			},
	// 			(error) => {
	// 				console.log('FAILED...', error.text);
	// 			}
	// 		);
	// };

	return (
		<>
			{/* <Toaster position="bottom-center" /> */}
			<section className="w-full flex flex-col items-center z-30">
				{modalInfo && <ModalTacoInfo setModalInfo={setModalInfo} />}
				<div className="infos-height flex flex-col justify-center items-center">
					<h1 className="text-5xl my-3">DIEGO M. RUIZ</h1>
					<div className="flex items-center">
						<button onClick={() => setModalInfo(true)} className=" leading-none px-4 py-2 border-solid border-white rounded-xl my-5 text-2xl hover:bg-stone-800" style={{ border: '3px solid' }}>
							{' '}
							About me
						</button>
						{/* <IoDocumentTextOutline href="/CV-Taco.pdf" download={''} color="white" size={40} className=" cursor-pointer mx-2" /> */}
					</div>
				</div>
				<div className="flex w-80 mb-8 justify-around items-center">
					<a href="https://www.youtube.com/@Tacoelshido">
						<FaYoutube size={35} color="white" />
					</a>
					<a href="https://www.instagram.com/tacoelshido/">
						<FaInstagram size={35} color="white" />
					</a>
					<a href="https://www.linkedin.com/in/diego-m-ruiz/">
						<FaLinkedin size={35} color="white" />
					</a>
					{/* <a href="https://x.com/tacoelshido">
						<RiTwitterXFill size={35} color="white" />
					</a> */}
					<a href="https://www.tiktok.com/@tacoelshido">
						<FaTiktok size={28} color="white" />
					</a>
					<a href="https://bsky.app/profile/tacoelshido.bsky.social">
						<FaBluesky size={28} color="white" />
					</a>
				</div>

				<a  className="px-6 py-2 flex items-center justify-center border-solid border-white bg-white rounded-xl my-5 text-2xl hover:bg-slate-300 leading-none mb-14" style={{ border: '3px solid' }} 
				href="https://mail.google.com/mail/?view=cm&fs=1&to=tacoelshido@gmail.com"
				target="_blank">
					<p className='leading-none text-black p-0 m-0' >Contact</p>
				</a>
				{/* 
				<form ref={form} onSubmit={handlerEmail} className="xl:w-4/12 w-11/12 flex flex-col justify-center items-end xl:mt-16 xl:mb-16 mt-16 mb-36">
					<input name="user_name"placeholder='Name' type="text" className="bg-transparent placeholder:text-white text-left text-2xl my-3 w-full border-2 border-solid rounded-xl py-3 px-5" />
					<input name="user_email"placeholder='Email' type="email" className="bg-transparent placeholder:text-white text-left text-2xl my-3 w-full border-2 border-solid rounded-xl py-3 px-5" />
					<textarea name="message" placeholder='Message' id="" className="bg-transparent placeholder:text-white text-left text-2xl my-3 border-2 border-solid rounded-xl w-full min-h-48 py-3 px-5"></textarea>
					<button className="px-12 py-1 bg-white text-black border-solid border-white border-2 rounded-xl my-5 text-2xl">Send</button>
				</form> */}
			</section>
		</>
	);
}
