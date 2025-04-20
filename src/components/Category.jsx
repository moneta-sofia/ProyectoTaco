import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserOptions from './UserOptions';
import { MdModeEditOutline } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Modal from './EditModal/Modal';
import { ImagesContext } from '../contexts/imagesContext';
import TacosInfo from './TacosInfo';
import Navbar from './Navbar';
import { LanguageContext } from '../contexts/LanguageContext';
import LanguageButton from './LanguageButton';

export default function Category({ name }) {
	const {isSpanish} = useContext(LanguageContext);
	const { images, replaceImages, urlBase, removeUnderscore } = useContext(ImagesContext);
	const [modal, setModal] = useState(false);
	const userName = localStorage.getItem('user');
	const location = useLocation(); // Detecta cambios en la URL


	const extractVideoCode = (url) => url.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/)?.[1];

	const fetchImages = async () => {
		try {
			const response = await fetch(`${urlBase}/images/${name}`); //refactor
			const data = await response.json();
			replaceImages(removeUnderscore(data));
		} catch (error) {
			console.log('Error fetching ' + error);
		}
	};

	useEffect(() => {
		fetchImages();
	}, [[name, location.pathname]]);

	return (
		<>
			<div className="fixed z-10 w-full h-screen top-0 xl:px-16 px-5 xl:py-8 py-2 flex flex-col justify-between">
				<div className="flex w-full justify-between">
					<Link to="../" className=" z-10 flex cursor-pointer h-fit w-fit bg-black pl-3 py-3.5 pr-4 rounded-full mr-4 xl:mb-0 mb-4 text-slate-100 pointer-events-auto">
						<IoIosArrowBack size={35} color="slate-100" />
					</Link>
					<div className='relative flex z-50'>
						<div className='mx-3'>
							<LanguageButton/>
						</div>
						<div className='mx-3'>
							<Navbar />
						</div>
					</div>
				</div>
				<div className="flex w-full justify-between">
					<UserOptions />
					{userName && (
						<button onClick={() => setModal(true)} className=" pointer-events-auto z-10 text-3xl self-end h-fit w-fit flex align-bottom text-black cursor-pointer bg-slate-100 p-4 rounded-full ">
							<MdModeEditOutline />
						</button>
					)}
				</div>
			</div>

			{modal && <Modal setModal={setModal} categoryName={name} />}
			<div className=" pointer-events-none base2 relative z-0 w-full flex flex-col items-center justify-center pb-24 pt-16 ">
				{images && (
					images.map((image) => {
						return (
							<div key={image.id} className="w-11/12 my-5 z-20">
								{image?.url.includes('https://www.youtube.com/') || image?.url.includes('https://youtu.be/') ? <iframe className="w-full aspect-video rounded-xl z-50 " src={`https://www.youtube.com/embed/${extractVideoCode(image.url)}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe> : <img alt={image.description ? image.description : 'Image'} src={image.url} className="w-full z-20" />}
								{
									isSpanish ? 
									image.descriptionESP && <p>{image.descriptionESP} </p>
									:
									image.descriptionENG && <p>{image.descriptionENG} </p>
								}
							</div>
						);
					})
				)}
			</div>
			<div className="bg-black ">
				<TacosInfo />
			</div>
		</>
	);
}
