import { TbLogout } from 'react-icons/tb';
import { LanguageContext } from '../contexts/LanguageContext';
import { useContext } from 'react';

export default function UserOptions() {
	const { isSpanish } = useContext(LanguageContext)
	const userName = localStorage.getItem('user');

	const handlerLogOut = () => {
		localStorage.removeItem('user');
		localStorage.removeItem('token');
		window.location.reload();
	};

	return (
		<>

			{userName && (
				<div className=" pointer-events-auto z-10 flex xl:flex-row flex-col xl:items-center items-start align-center text-black	">
					<button onClick={handlerLogOut} className="cursor-pointer bg-slate-100 p-5 rounded-full mr-4 xl:mb-0 mb-4 text-black text-xl">
						<TbLogout />
					</button>
					<p className="text-black bg-slate-100 py-3 px-5 rounded-3xl cursor-pointer select-none">
						{isSpanish ?
						<>Hola {userName}!</>
						:
						<>Hi {userName}!</>
					}
					</p>
				</div>
			)}
		</>
	);
}
