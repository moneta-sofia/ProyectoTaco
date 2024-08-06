import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Images from "./Images";

export default function Area({ images }) {
	return (
		<div className="w-10/12 bg-slate-300 h-fit">
            <SortableContext items={images} strategy={verticalListSortingStrategy}>
                {images.map((image) => (
                    <Images key={image._id} id={image._id} name={image.name} img={image.url}/>
                ))}
            </SortableContext>
		</div>
	);
}
