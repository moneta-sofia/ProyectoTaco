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
				<div className="fixed xl:bottom-10 bottom-5  xl:left-10 left-5 text-3xl flex xl:flex-row flex-col xl:items-center items-start align-center text-black z-40">
					<button onClick={handlerLogOut} className="cursor-pointer bg-slate-100 p-4 rounded-full mr-4 xl:mb-0 mb-4 text-black">
						<TbLogout size={30} />
					</button>
					<p className="text-black bg-slate-100 py-3 px-5 rounded-3xl cursor-pointer select-none">Hi {userName}!</p>
				</div>
			)}
		</>
	);
}
