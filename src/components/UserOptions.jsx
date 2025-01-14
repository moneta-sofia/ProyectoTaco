import { TbLogout } from 'react-icons/tb';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function UserOptions() {
	const userName = localStorage.getItem('user');

	const handlerLogOut = () => {
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		<>
			<div className="fixed xl:top-100 top-5 xl:left-10 left-5 z-30">
				<Link to="../" className="flex z-40 cursor-pointer bg-black pl-1 py-1.5 pr-1.5 rounded-full mr-4 xl:mb-0 mb-4 text-slate-100">
					<IoIosArrowBack size={35} color="slate-100" />
				</Link>
			</div>
			{userName && (
				<div className="fixed xl:bottom-10 bottom-5 xl:left-10 left-5 text-3xl flex xl:flex-row flex-col xl:items-center items-start align-center text-black z-40">
					<button onClick={handlerLogOut} className="cursor-pointer bg-slate-100 p-5 rounded-full mr-4 xl:mb-0 mb-4 text-black text-xl">
						<TbLogout />
					</button>
					<p className="text-black bg-slate-100 py-3 px-5 rounded-3xl cursor-pointer select-none">Hi {userName}!</p>
				</div>
			)}
		</>
	);
}
