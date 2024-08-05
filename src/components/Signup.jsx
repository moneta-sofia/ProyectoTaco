import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [invalidInput, setInvalidInput] = useState(false);
	const [redirectMssg, setRedirectMssg] = useState(false);
	const [errEmailExist, setErrEmailExist] = useState(false);
	const [err, setErr] = useState(false);
	const [loading, setLoading] = useState(false);

	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user || !password || !email) {
			setInvalidInput(true);
			return;
		} else {
			setInvalidInput(false);
		}
		setErrEmailExist(false);
		setLoading(true);
		axios
			.post('https://backtaco.onrender.com/user/signup', {
				email: email,
				user: user,
				password: password,
			})
			.then(function (response) {
				localStorage.setItem('user', user);
				localStorage.setItem('token', response.data.token);
				setRedirectMssg(true);
				navigate('/');
			})
			.catch(function (error) {
				if (error.response.status === 400) {
					setErrEmailExist(true);
				} else {
					setErr(true);
				}
				setErrEmailExist(true);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="base h-screen w-full flex flex-col justify-center items-center text-3xl">
			<h1 className="text-6xl">Signup Page</h1>
			<form action="" onSubmit={handleSubmit} noValidate className="flex flex-col text-3xl mt-10">
				<input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} className="my-3 p-2 rounded-xl text-black" />
				<input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="my-3 p-2 rounded-xl text-black" />
				<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="my-3 p-2 rounded-xl text-black" />
				{loading && <p>Loading...</p>}
				{invalidInput && <p>Fields empty!</p>}
				{errEmailExist && <p>email or user already exist!</p>}
				{err && <p>Error</p>}
				{redirectMssg && <p>Redirecting...</p>}
				<button type="submit" className="my-5 p-2 border-white border-solid border-4 rounded-xl hover:bg-slate-900 active:bg-slate-800">
					Login
				</button>
			</form>
		</div>
	);
}
