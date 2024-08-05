import { TbLogout } from 'react-icons/tb';

export default function UserOptions() {
	const userName = localStorage.getItem('user');

	const handlerLogOut = () => {
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		<>
			{userName && (
				<div className="fixed bottom-10 left-10 text-3xl flex items-center align-center text-black">
					<button onClick={handlerLogOut} className="cursor-pointer bg-slate-100 p-4 rounded-full mr-4 text-black">
						<TbLogout size={30} />
					</button>
					<p className="text-black bg-slate-100 py-3 px-5 rounded-3xl cursor-pointer select-none">Hi {userName}!</p>
				</div>
			)}
		</>
	);
}
