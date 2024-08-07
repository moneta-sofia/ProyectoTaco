import { closestCorners, DndContext } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { IoCloseOutline } from 'react-icons/io5';
import Area from './Area';
import { useState } from 'react';
export default function Modal({ setModal, setImages, images }) {
    // const [loading, setLoading] = useState(false);
    const [newImages, setNewImages]= useState(images)
    console.log(images);
    
    const changePositions = () => {
        const changedImages = newImages.map((image, index) =>{
            return{
                ...image,
                position: index
            }
        })
        return changedImages
    } 

    const handlerSubmitChanges = () => {
        console.log(changePositions());
    }
    

    const getImagesPosition = (id) => newImages.findIndex((image) => image.id === id);

	const handlerDragEnd = (event) => {
		const { active, over } = event;
		if (active.id === over.id) return;
		setNewImages((imgs) => {
			const originalPosition = getImagesPosition(active.id);
			const newPosition = getImagesPosition(over.id);
			return arrayMove(imgs, originalPosition, newPosition);
		});
	};

	return (
		<div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
			<div className="w-screen h-screen bg-black opacity-50 fixed z-10 top-0 left-0" onClick={()=> setModal(false)} />
			<div className=" relative bg-slate-100 w-5/12 h-fit px-8 pt-5 pb-4 z-20 rounded-xl flex flex-col justify-center items-center">
				<button onClick={() => setModal(false)} className="absolute top-0 right-0 m-5">
					<IoCloseOutline color="black" size={30} />
				</button>
				<h1 className="text-black text-3xl">Admin Panel</h1>
				<hr className="bg-slate-300 w-11/12 h-0.5 my-3" />
				<DndContext onDragEnd={handlerDragEnd} collisionDetection={closestCorners}>
					<Area images={newImages} />
				</DndContext>
				<button className="bg-black w-11/12 rounded shadow-md my-2 py-1 hover:bg-gray-900 active:bg-black" onClick={()=> handlerSubmitChanges() }>SAVE</button>
			</div>
		</div>
	);
}
