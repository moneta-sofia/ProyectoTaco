import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Images from './Images';
import { useContext } from 'react';
import { ImagesContext } from '../../contexts/imagesContext';


export default function Area() {
	const {newImages} = useContext(ImagesContext)
	return (
		<>
			<div className="w-11/12 bg-slate-300 h-fit">
				<SortableContext items={newImages} strategy={verticalListSortingStrategy}>
					{newImages.map((image) => (
						<Images key={image.id} id={image.id} name={image.name} img={image.url} description={image.description} />
					))}
				</SortableContext>
			</div>
		</>
	);
}
