import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Images from './Images';


export default function Area({ images, setImages, setNewImages }) {
	return (
		<>
			<div className="w-11/12 bg-slate-300 h-fit">
				<SortableContext items={images} strategy={verticalListSortingStrategy}>
					{images.map((image) => (
						<Images key={image.id} id={image.id} name={image.name} img={image.url} description={image.description} setImages={setImages} setNewImages={setNewImages} />
					))}
				</SortableContext>
			</div>
		</>
	);
}
