import { useEffect, useState } from 'react';

export default function Category({ name }) {
	const [images, setImages] = useState([]);

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
