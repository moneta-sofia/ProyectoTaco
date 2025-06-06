import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useState } from 'react';
import SubModalDelete from './SubModalDelete';
import SubModalEdit from './SubModalEdit';

export default function Images({ id, name, img, descriptionESP, descriptionENG, categoryName }) {
	const [subModalDelete, setSubModalDelete] = useState(false);
	const [subModalEdit, setSubModalEdit] = useState(false);
	const [draggable, setDraggable] = useState(true);
	const [subModalInfo, setSubModalInfo] = useState({});
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id, disabled: !draggable });

	const handlerSubModal = (typeModal) => {
		setDraggable(false);
		setSubModalInfo({ id, name, img, descriptionESP, descriptionENG});
		if (typeModal === 'delete') {
			setSubModalDelete(true);
		} else if (typeModal === 'edit') {
			setSubModalEdit(true);
		}
	};

	// This is for not bug Image component when it's clicked on some button
	const handlerDragable = () => {
		if (subModalDelete || subModalEdit) {
			setDraggable(false);
		} else if (!subModalDelete && !subModalEdit) {
			setDraggable(true);
		}
	};

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	const getTumbnail = () => {
		if (img.includes('https://www.youtube.com/') || img.includes('https://youtu.be/')) {
			return `https://img.youtube.com/vi/${img.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/)?.[1]}/default.jpg`;
		} else {
			return img;
		}
	};

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners} className="m-2 p-2 bg-white flex justify-between rounded shadow-md touch-none md:w-auto w-10/12">
			<div className="flex justify-center items-center">
				{img.length > 0 ? <div className="h-5 w-5 bg-cover" style={{ backgroundImage: `url(${getTumbnail()})` }} /> : <></>}
				<p className="text-black ml-3">{window.innerWidth > 750 ? name : name.length > 15 ? name.slice(0, 15) + '...' : name}</p>
			</div>
			<div className="flex mr-4">
				<button onClick={() => handlerSubModal('edit')} onMouseEnter={() => setDraggable(false)} onMouseLeave={handlerDragable} className="delete-button bg-green-600 h-full aspect-square flex justify-center items-center rounded active:bg-green-800 mr-2">
					<MdEdit color="white" />
				</button>
				<button onClick={() => handlerSubModal('delete')} onMouseEnter={() => setDraggable(false)} onMouseLeave={handlerDragable} className="delete-button bg-red-600 h-full aspect-square flex justify-center items-center rounded active:bg-red-800">
					<MdDelete color="white" />
				</button>
			</div>
			{subModalDelete && <SubModalDelete subModalInfo={subModalInfo} setSubModalDelete={setSubModalDelete} setDraggable={setDraggable} />}
			{subModalEdit && <SubModalEdit subModalInfo={subModalInfo} setSubModalEdit={setSubModalEdit} setDraggable={setDraggable} categoryName={categoryName} />}
		</div>
	);
}
