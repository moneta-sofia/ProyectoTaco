import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MdDelete } from 'react-icons/md';
import { useState} from "react";
import SubModalDelete from './SubModalDelete'

export default function Images({ id, name, img , description }) {
	const [subModalDelete, setSubModalDelete] = useState(false);
	const [draggable, setDraggable] = useState(true);
	const [subModalInfo, setSubModalInfo] = useState({});
	const {attributes, listeners, setNodeRef, transform, transition} = useSortable({ id, disabled: !draggable});

	const handlerDelete = (e) =>{
		e.stopPropagation();
		setDraggable(false);
		setSubModalInfo({ id, name, img, description });
		setSubModalDelete(true);		
	}

	const handlerDragable = () => {
		if(subModalDelete){
			setDraggable(false);
		}else if(!subModalDelete){
			setDraggable(true);
		}
    }

	const style = {
		transform: CSS.Transform.toString(transform),
		transition
	};

	return (
		<div ref={setNodeRef}  style={style} {...attributes} {...listeners} className="m-2 p-2 bg-white flex justify-between rounded shadow-md touch-none">
			<div className='flex justify-center items-center'>
				<div className="h-5 w-5 bg-cover" style={{ backgroundImage: `url(${img})` }} />
				<p className="text-black ml-3">{name}</p>
			</div>
			<div className='mr-3'>
				<button onClick={handlerDelete} onMouseEnter={()=>setDraggable(false)} onMouseLeave={handlerDragable}  className="delete-button bg-red-600 h-full aspect-square flex justify-center items-center rounded active:bg-red-800">
					<MdDelete color="white" />
				</button>
			</div>
			{subModalDelete && <SubModalDelete subModalInfo={subModalInfo} setSubModalDelete={setSubModalDelete} setDraggable={setDraggable}/>}
		</div>
	);
}
