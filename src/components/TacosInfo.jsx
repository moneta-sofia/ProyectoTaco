import { useRef } from 'react';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { RiTwitterXFill } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function TacosInfo() {
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
			<Toaster />
			<section className="w-full flex flex-col items-center ">
				<div className="h-1/3 my-8 flex flex-col justify-center items-center">
					<h1 className="text-5xl my-3">DIEGO M. RUIZ</h1>
					<button className="px-4 py-1 border-solid border-white border-2 rounded-xl my-5 text-2xl"> About me</button>
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

				<form ref={form} onSubmit={handlerEmail} className="w-full mb-16 flex flex-col justify-center items-center">
					<p className="my-4 text-2xl">Name</p>
					<input name="user_name" type="text" className="bg-transparent border-2 border-solid rounded-xl p-2" />
					<p className="my-4 text-2xl">Email</p>
					<input name="user_email" type="email" className="bg-transparent border-2 border-solid rounded-xl p-2" />
					<p className="my-4 text-2xl">Message</p>
					<textarea name="message" id="" className="bg-transparent border-2 border-solid rounded-xl w-5/12 min-h-48 p-2"></textarea>
					<button className="px-4 py-1 bg-white text-black border-solid border-white border-2 rounded-xl my-5 text-2xl">Send</button>
				</form>
			</section>
		</>
	);
}
