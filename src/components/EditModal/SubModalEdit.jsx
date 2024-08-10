import axios from 'axios';
import { useContext, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { ImagesContext } from '../../contexts/imagesContext';

export default function SubModalEdit({ subModalInfo, setSubModalEdit, setDraggable, categoryName }) {
	const { urlBase , updateImage, updateNewImage,removeUnderscore } = useContext(ImagesContext);
	const [name, setName] = useState(subModalInfo.name);
	const [description, setDescription] = useState(subModalInfo.description);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const token = localStorage.getItem('token');

	const handlerClose = () => {
		setSubModalEdit(false);
		setDraggable(true);
	};

	const editHandler = () => {
		setLoading(true);
		axios
			.put(`${urlBase}/images/${categoryName}/${subModalInfo.id}`, {
				name: name,
				description: description	
			},{
				headers: {
					Authorization: token,
				},
			})
			.then(function (res) {
				const dataParsed = removeUnderscore([res.data]);
				updateImage(...dataParsed);
				updateNewImage(...dataParsed);
				setSubModalEdit(false)
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
					<h1 className="text-black text-3xl">Let's edit</h1>
					<p className="text-black text-3xl"> "{subModalInfo.name}" ?</p>
					<img src={subModalInfo.img} alt={subModalInfo.name} className='h-36 my-5'/>
					<form className='w-full flex flex-col items-center justify-center'>
						<div className='flex flex-col w-11/12'>
							<label className='mb-2 text-left'>Name:</label>
							<input type="text"  maxLength="20" onChange={(e)=>setName(e.target.value)} value={name} className='text-black w-full bg-white p-2 border-solid border-2 border-black rounded'/>
						</div>
						<div className='flex flex-col w-11/12 mb-3'>
							<label className='my-2 text-left'>Description:</label>
							<textarea maxLength="100" onChange={(e)=>setDescription(e.target.value)} value={description} className='text-black w-full bg-white p-2 border-solid border-2 border-black rounded'/>
						</div>
					</form>
					{loading && <div className='text-black'>Loading...</div>}
					{error && <div className='text-black'>Error</div>}
					<button onClick={editHandler} className='bg-black w-11/12 rounded shadow-md mb-5 mt-3 py-1 hover:bg-gray-900 active:bg-black'>Confirm</button>
				</div>
			</div>
		</>
	);
}
