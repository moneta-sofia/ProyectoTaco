import { useEffect, useState } from 'react';
import UserOptions from './UserOptions';
import { MdModeEditOutline } from 'react-icons/md';
import Modal from './EditModal/Modal';


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

			{modal && <Modal setModal={setModal} setImages={setImages} images={images}/>}

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
