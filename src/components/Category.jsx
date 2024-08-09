import { useContext, useEffect, useState } from 'react';
import UserOptions from './UserOptions';
import { MdModeEditOutline } from 'react-icons/md';
import Modal from './EditModal/Modal';
import { ImagesContext } from '../contexts/imagesContext';

export default function Category({ name }) {
	const { images , replaceImages, urlBase } = useContext(ImagesContext);
	const [modal, setModal] = useState(false);
	const userName = localStorage.getItem('user');

	function removeUnderscore(images) {
		return images.map((image) => {
			const { _id, ...rest } = image;
			return { id: _id, ...rest };
		});
	}

	const fetchImages = async () => {
		try {
			const response = await fetch(`${urlBase}/images/${name}`);
			const data = await response.json();
			replaceImages(removeUnderscore(data));
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

			{modal && <Modal setModal={setModal} categoryName={name} />}

			{images ? (
				images.map((image) => {
					return (
						<div key={image.id} className="w-11/12 my-5">
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
