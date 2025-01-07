import { useContext, useEffect, useState } from 'react';
import UserOptions from './UserOptions';
import { MdModeEditOutline } from 'react-icons/md';
import Modal from './EditModal/Modal';
import { ImagesContext } from '../contexts/imagesContext';
import TacosInfo from './TacosInfo';

export default function Category({ name }) {
	const { images, replaceImages, urlBase, removeUnderscore } = useContext(ImagesContext);
	const [modal, setModal] = useState(false);
	const userName = localStorage.getItem('user');

	const extractVideoCode = (url) => url.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/)?.[1];

	const fetchImages = async () => {
		try {
			const response = await fetch(`${urlBase}/images/${name}`);  //refactor
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
		<>
			<UserOptions />
			{userName && (
				<button onClick={() => setModal(true)} className="fixed xl:bottom-10 bottom-5 xl:right-10 right-5 text-3xl flex items-center align-center text-black cursor-pointer bg-slate-100 p-4 rounded-full mr-4">
					<MdModeEditOutline />
				</button>
			)}
			{modal && <Modal setModal={setModal} categoryName={name} />}
			<div className="base2 relative  w-full flex flex-col items-center justify-center pb-24 pt-16">
				{images ? (
					images.map((image) => {
						return (
							<div key={image.id} className="w-11/12 my-5 z-20">
								{
									(image.url.includes('https://www.youtube.com/') || image.url.includes('https://youtu.be/')) 
									?
									<iframe className="w-full aspect-video rounded-xl z-50 " src={`https://www.youtube.com/embed/${extractVideoCode(image.url)}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
									:
									<img alt={image.description ? image.description : 'Image'} src={image.url} className="w-full" />
								}

								{image.description && <p>{image.description} </p>}
							</div>
						);
					})
				) : (
					<></>
				)}
			</div>
			<div className="bg-black ">
				<TacosInfo />
			</div>
		</>
	);
}
