import { useRef, useState } from 'react';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { RiTwitterXFill } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import ModalTacoInfo from './ModalTacoInfo';

export default function TacosInfo() {
	const [modalInfo, setModalInfo] = useState(false);
	const form = useRef();

	const handlerEmail = (e) => {
		e.preventDefault();
		toast
			.promise(
                emailjs.sendForm("service_taco", "template_mxgw4ua", form.current, "GRinZEICKiSrZx_GT"),
                {
                    loading: 'Sending...',
                    success: <b>Mail sended!</b>,
                    error: <b>Could not send the mail :(</b>,
                })
			.then(
				() => {
					form.current.reset();
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<>
			<Toaster position="bottom-center" />
			<section className="w-full flex flex-col items-center z-30">
			{modalInfo && <ModalTacoInfo setModalInfo={setModalInfo} />}
				<div className="h-1/3 my-8 flex flex-col justify-center items-center">
					<h1 className="text-5xl my-3">DIEGO M. RUIZ</h1>
					<button onClick={()=> setModalInfo(true)}  className="px-4 py-1 border-solid border-white border-2 rounded-xl my-5 text-2xl hover:bg-stone-800 active:bg-transparent"> About me</button>
				</div>
				<div className="flex w-64 mb-8 justify-around items-center">
					<a href="https://www.youtube.com/@Tacoelshido">
						<FaYoutube size={35} color="white" />
					</a>
					<a href="https://www.instagram.com/tacoelshido/">
						<FaInstagram size={35} color="white" />
					</a>
					<a href="https://www.linkedin.com/in/diego-m-ruiz/">
						<FaLinkedin size={35} color="white" />
					</a>
					<a href="https://x.com/tacoelshido">
						<RiTwitterXFill size={35} color="white" />
					</a>
					<a href="https://www.tiktok.com/@tacoelshido">
						<FaTiktok size={28} color="white" />
					</a>
				</div>

				<form ref={form} onSubmit={handlerEmail} className="xl:w-4/12 w-11/12 flex flex-col justify-center items-end xl:mt-16 xl:mb-16 mt-16 mb-36">
					<input name="user_name"placeholder='Name' type="text" className="bg-transparent placeholder:text-white text-left text-2xl my-3 w-full border-2 border-solid rounded-xl py-3 px-5" />
					<input name="user_email"placeholder='Email' type="email" className="bg-transparent placeholder:text-white text-left text-2xl my-3 w-full border-2 border-solid rounded-xl py-3 px-5" />
					<textarea name="message" placeholder='Message' id="" className="bg-transparent placeholder:text-white text-left text-2xl my-3 border-2 border-solid rounded-xl w-full min-h-48 py-3 px-5"></textarea>
					<button className="px-12 py-1 bg-white text-black border-solid border-white border-2 rounded-xl my-5 text-2xl">Send</button>
				</form>
			</section>
		</>
	);
}
