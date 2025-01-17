import axios from 'axios';
import { useContext, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { ImagesContext } from '../../contexts/imagesContext';

export default function SubModalAdd({ setSubModalAdd, categoryName }) {
	const { urlBase, addImage, addNewImage, images, removeUnderscore } = useContext(ImagesContext);
	const position = images.length;
	const [imageOrVideo, setImageOrVideo] = useState(true);
	const [file, setFile] = useState(null);
	const [urlYT, setUrlYT] = useState('');
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const token = localStorage.getItem('token');

	const postHandler = () => {
		console.log(position);

		const formData = new FormData();
		file != null && formData.append('filename', file)
		urlYT != null && formData.append('urlVideo', urlYT)
		formData.append('name', name);
		formData.append('description', description);
		formData.append('position', position);
		setLoading(true);

		axios
			.post(`${urlBase}/images/${categoryName}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: token,
				},
			})
			.then(function (res) {
				const parsedImg = removeUnderscore([res.data]);
				addImage(...parsedImg);
				addNewImage(...parsedImg);
				setSubModalAdd(false);
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


	const clickImage = () => {
		setImageOrVideo(true)
		setFile(null);
	}
	const clickVideo = () => {
		setImageOrVideo(false)
		setUrlYT('')
	}
	return (
		<>
			<div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-20">
				<div className="w-screen h-screen bg-black opacity-20 fixed z-10 top-0 left-0" onClick={() => setSubModalAdd(false)} />
				<div className=" relative bg-slate-100 xl:w-5/12 w-full h-fit px-8 pt-5 pb-4 z-20 rounded-xl flex flex-col justify-center items-center">
					<button onClick={() => setSubModalAdd(false)} className="absolute top-0 right-0 m-5">
						<IoCloseOutline color="black" size={30} />
					</button>
					<h1 className="text-black text-3xl">Add your File!</h1>
					<form className="w-full flex flex-col items-center justify-center">
						<div className="w-11/12 flex items-center justify-around my-5 bg-white">
							<div className={`border-solid border-2 border-black w-full py-3 font-bold ${imageOrVideo ? 'bg-slate-400' : 'bg-white'} hover:bg-slate-300 active:bg-slate-500 select-none text-center`} onClick={clickImage}>
								IMAGEN
							</div>
							<div className={`border-solid border-2 border-black w-full py-3 font-bold ${imageOrVideo ? 'bg-white' : 'bg-slate-400'} hover:bg-slate-300 active:bg-slate-500 select-none text-center`} onClick={clickVideo}>
								VIDEO
							</div>
						</div>

						{imageOrVideo ? (
							<div className="flex flex-col w-11/12">
								<label className="mb-2 text-left">Image:</label>
								<input type="file" onChange={(e) => setFile(e.target.files[0])} className="text-black w-full bg-white p-2 border-solid border-2 border-black rounded" />
							</div>
						) : (
							<div className="flex flex-col w-11/12">
								<label className="mb-2 text-left">Video URL (Youtube):</label>
								<input type="url" onChange={(e) => setUrlYT(e.target.value || '')} value={urlYT} className="text-black w-full bg-white p-2 border-solid border-2 border-black rounded" />
							</div>
						)}

						<div className="flex flex-col w-11/12">
							<label className="my-3 text-left">Name:</label>
							<input type="text" maxLength="20" onChange={(e) => setName(e.target.value)} value={name} className="text-black w-full bg-white p-2 border-solid border-2 border-black rounded" />
						</div>
						<div className="flex flex-col w-11/12 mb-3">
							<label className="my-2 text-left">Description:</label>
							<textarea maxLength="100" onChange={(e) => setDescription(e.target.value)} value={description} className="text-black w-full bg-white p-2 border-solid border-2 border-black rounded" />
						</div>
					</form>
					{loading && <div className="text-black">Loading...</div>}
					{error && <div className="text-black">Error</div>}
					<button onClick={postHandler} className="bg-black w-11/12 rounded shadow-md mb-5 mt-3 py-1 hover:bg-gray-900 active:bg-black">
						Confirm
					</button>
				</div>
			</div>
		</>
	);
}
