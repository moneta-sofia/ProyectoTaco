import { useEffect, useState } from 'react';
import UserOptions from './UserOptions';
import { MdModeEditOutline } from 'react-icons/md';
import { IoCloseOutline } from 'react-icons/io5';

export default function Category({ name }) {
	const [images, setImages] = useState([]);
	const [modal, setModal] = useState(false);
	const userName = localStorage.getItem('user');

	const fetchImages = async () => {
		try {
			const response = await fetch(`https://backtaco.onrender.com/images/${name}`);
			const data = await response.json();
			setImages(data);
		} catch (error) {
			console.log('Error fetching ' + error);
		}
	};

	useEffect(() => {
		fetchImages();
	}, []);

	return (
		<div className="base w-full flex flex-col items-center justify-center">
			<UserOptions />
			{userName && (
				<button onClick={() => setModal(true)} className="fixed bottom-10 right-10 text-3xl flex items-center align-center text-black cursor-pointer bg-slate-100 p-4 rounded-full mr-4">
					<MdModeEditOutline />
				</button>
			)}

			{modal && (
				<div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
					<div className="w-screen h-screen bg-black opacity-50 fixed z-10 top-0 left-0" />
					<div className=" relative bg-slate-100 w-10/12 h-fit p-10 z-20 rounded-xl flex flex-col justify-center items-center">
						<button onClick={() => setModal(false)} className="absolute top-0 right-0 m-5">
							<IoCloseOutline color="black" size={30} />
						</button>
						<h1 className="text-black text-3xl">Admin Panel</h1>
						<hr className="bg-slate-300 w-11/12 my-5" />
					</div>
				</div>
			)}

			{images.length > 0 ? (
				images.map((image) => {
					return (
						<div key={image._id} className="w-11/12 my-5">
							<img alt={image.description ? image.description : 'Image'} src={image.url} className="w-full" />
							{image.description && <p>{image.description} </p>}
						</div>
					);
				})
			) : (
				<></>
			)}
		</div>
	);
}
