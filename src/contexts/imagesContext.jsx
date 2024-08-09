import { createContext, useState } from 'react';

export const ImagesContext = createContext({});

export const ImagesProvider = (props) => {
	const [images, setImages] = useState([]);
	const [newImages, setNewImages] = useState([]);
	const urlBase = 'https://backtaco.onrender.com';

	const addImage = (newImage) => {
		setImages((prevImages) => [...prevImages, newImage]);
	};

	const updateImage = (updatedImage) => {
		setImages((prevImages) => prevImages.map((image) => (image.id === updatedImage.id ? updatedImage : image)));
	};

	const deleteImage = (id) => {
		setImages((prevImages) => prevImages.filter((image) => image.id !== id));
	};

	const replaceImages = (newImages) => {
		setImages(newImages);
	};



	const addNewImage = (newImage) => {
		setNewImages((prevImages) => [...prevImages, newImage]);
	};

	const updateNewImage = (updatedImage) => {
		setNewImages((prevImages) => prevImages.map((image) => (image.id === updatedImage.id ? updatedImage : image)));
	};

	const deleteNewImage = (id) => {
		setNewImages((prevImages) => prevImages.filter((image) => image.id !== id));
	};

	const replaceNewImages = (newImages) => {
		setNewImages(newImages);
	};
	

	const value = {
		images,
		newImages,
		addImage,
		updateImage,
		deleteImage,
		replaceImages,
		addNewImage,
		updateNewImage,
		deleteNewImage,
		replaceNewImages,
		urlBase,
	};

	return <ImagesContext.Provider value={value}>{props.children}</ImagesContext.Provider>;
};
