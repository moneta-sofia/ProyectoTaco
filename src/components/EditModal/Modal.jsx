import { closestCorners, DndContext } from '@dnd-kit/core';
import { IoCloseOutline } from 'react-icons/io5';
import Area from './Area';
import { arrayMove } from '@dnd-kit/sortable';
export default function Modal({setModal,setImages, images}) {

    const getImagesPosition = id => images.findIndex(image => image._id === id);

    const handlerDragEnd = (event) => {
        const {active, over} = event;

        if(active.id === over.id) return;
        setImages(images =>{
            const originalPosition = getImagesPosition(active.id);
            const newPosition = getImagesPosition(over.id)

            return arrayMove(images, originalPosition, newPosition)
        })
    }

	return (
		<div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
			<div className="w-screen h-screen bg-black opacity-50 fixed z-10 top-0 left-0" />
			<div className=" relative bg-slate-100 w-7/12 h-fit p-10 z-20 rounded-xl flex flex-col justify-center items-center">
				<button onClick={() => setModal(false)} className="absolute top-0 right-0 m-5">
					<IoCloseOutline color="black" size={30} />
				</button>
				<h1 className="text-black text-3xl">Admin Panel</h1>
				<hr className="bg-slate-300 w-11/12 my-5" />
                    <DndContext onDragEnd={handlerDragEnd} collisionDetection={closestCorners}>
                        <Area images={images}/>
                    </DndContext>
			</div>
		</div>
	);
}
