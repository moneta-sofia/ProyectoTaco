import axios from 'axios';
import { useContext, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { ImagesContext } from '../../contexts/imagesContext';

export default function SubModalDelete({ subModalInfo, setSubModalDelete, setDraggable }) {
	const { urlBase, deleteImage,deleteNewImage } = useContext(ImagesContext);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const token = localStorage.getItem('token');

	const handlerClose = () => {
		setSubModalDelete(false);
		setDraggable(true);
	};

	const deleteHandler = () => {
		setLoading(true);
		axios
			.delete(`${urlBase}/images/${subModalInfo.id}`, {
				headers: {
					Authorization: token,
				},
			})
			.then(function () {
				deleteImage(subModalInfo.id);
				deleteNewImage(subModalInfo.id);
			})
			.catch(function (error) {
				console.log(error);
				setError(true);
				setTimeout(() => {
					setError(false);
				}, 5000);
			})
			.finally(() => {
				setLoading(false);
			});
			
	};

	return (
		<>
			<div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-20">
				<div className="w-screen h-screen bg-black opacity-20 fixed z-10 top-0 left-0" onClick={handlerClose} />
				<div className=" relative bg-slate-100  xl:w-5/12 w-full h-fit px-8 pt-5 pb-4 z-20 rounded-xl flex flex-col justify-center items-center">
					<button onClick={handlerClose} className="absolute top-0 right-0 m-5">
						<IoCloseOutline color="black" size={30} />
					</button>
					<h1 className="text-black text-3xl text-center">Are you sure to delete</h1>
					<p className="text-black text-3xl"> "{subModalInfo.name}" ?</p>
					<img src={subModalInfo.img} alt={subModalInfo.name} className='h-36 my-5'/>
					{loading && <div className='text-black'>Loading...</div>}
					{error && <div className='text-black'>Error</div>}
					<button onClick={deleteHandler} className='bg-black w-11/12 rounded shadow-md my-2 py-1 hover:bg-gray-900 active:bg-black'>Confirm</button>
				</div>
			</div>
		</>
	);
}
