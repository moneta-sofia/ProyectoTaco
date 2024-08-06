import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function Images({ id, name, img }) {
	const {attributes, listeners, setNodeRef, transform, transition} = useSortable({ id });

	const style = {
		transform: CSS.Transform.toString(transform) + '!important',
		transition: transition + '!important'
	};

	return (
		<div ref={setNodeRef} {...attributes} {...listeners} style={style} className="m-3 p-2 bg-white flex rounded shadow-md touch-none border-solid border-red-300 border-2">
			<div className="h-5 w-5 bg-cover" style={{ backgroundImage: `url(${img})` }} />
			<p className="text-black ml-3">{name}</p>
		</div>
	);
}
