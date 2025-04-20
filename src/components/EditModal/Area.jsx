import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Images from './Images';
import { useContext } from 'react';
import { ImagesContext } from '../../contexts/imagesContext';


export default function Area({categoryName}) {
	const {newImages} = useContext(ImagesContext)
	const finalImg = (img) => {
		if(img.includes('https://www.youtube.com/') || img.includes('https://youtu.be/')){
			return `https://img.youtube.com/vi/${img.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/)?.[1]}/default.jpg`
		} else {
			return img;
		}
	}
	

	return (
		<>
			<div className="xl:w-11/12 w-full bg-slate-300 h-4/6 overflow-y-auto overflow-x-hidden">
				<SortableContext items={newImages} strategy={verticalListSortingStrategy}>
					{newImages.map((image) => (
						<Images key={image.id} id={image.id} name={image.name} img={finalImg(image.url)} descriptionESP={image.descriptionESP} descriptionENG={image.descriptionENG}  categoryName={categoryName} />
					))}
				</SortableContext>
			</div>
		</>
	);
}
