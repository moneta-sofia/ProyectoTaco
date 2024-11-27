import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Images from './Images';
import { useContext } from 'react';
import { ImagesContext } from '../../contexts/imagesContext';


export default function Area({categoryName}) {
	const {newImages} = useContext(ImagesContext)
	return (
		<>
			<div className="xl:w-11/12 w-full bg-slate-300 h-4/6 overflow-y-auto overflow-x-hidden">
				<SortableContext items={newImages} strategy={verticalListSortingStrategy}>
					{newImages.map((image) => (
						<Images key={image.id} id={image.id} name={image.name} img={image.url} description={image.description} categoryName={categoryName} />
					))}
				</SortableContext>
			</div>
		</>
	);
}
