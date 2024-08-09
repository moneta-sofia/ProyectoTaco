import { IoCloseOutline } from 'react-icons/io5';

export default function SubModal({ subModalInfo, setSubModal, setDraggable }) {
	const handlerClose = () => {
		setSubModal(false);
		setDraggable(true);
	};

	return (
		<>
			<div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-20">
				<div className="w-screen h-screen bg-black opacity-20 fixed z-10 top-0 left-0"  onClick={handlerClose} />
				<div className=" relative bg-slate-100 w-5/12 h-fit px-8 pt-5 pb-4 z-20 rounded-xl flex flex-col justify-center items-center">
					<button onClick={handlerClose} className="absolute top-0 right-0 m-5">
						<IoCloseOutline color="black" size={30} />
					</button>
					<h1 className="text-black text-3xl">Are you sure to delete</h1>
					<p className="text-black text-3xl"> "{subModalInfo.name}" ?</p>
					<div className="w-32 aspect-square bg-cover my-5 shadow-md" style={{ backgroundImage: `url(${subModalInfo.img})` }} />
				</div>
			</div>
		</>
	);
}
