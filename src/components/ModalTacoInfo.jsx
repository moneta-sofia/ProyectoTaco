import { IoCloseOutline } from 'react-icons/io5';

export default function ModalTacoInfo({ setModalInfo }) {
	return (
		<div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center backdrop-blur-sm">
			{window.innerWidth < 1280 && (
				<button onClick={() => setModalInfo(false)} className="absolute top-0 right-0 xl:m-10 m-3 z-30">
					<IoCloseOutline color="white" size={40} />
				</button>
			)}
			<div className="w-screen h-screen bg-black opacity-50 fixed z-10 top-0 left-0" onClick={() => setModalInfo(false)} />
			<div className=" relative bg-stone-900 w-10/12 xl:w-7/12 xl:mt-0 mt-16 h-fit xl:px-8 p-4 pt-5 pb-4 z-20 flex flex-col justify items-center xl:items-start">
				<div className="absolute xl:-top-8 -top-12 xl:-left-5 bg-white p-5">
					<h1 className="text-black xl:text-3xl text-xl">HI! I'M DIEGO MARCELO RUIZ</h1>
				</div>

				<p className=" xl:mt-16 mt-10 m-2 xl:m-10 text-center xl:text-left xl:w-9/12 w-11/12">[Tu Nombre] Soy [tu profesión o área de especialización] con [número] años de experiencia en [campo o industria específica]. A lo largo de mi carrera, he desarrollado habilidades en [menciona 2 o 3 habilidades clave], trabajando en proyectos que van desde [describe brevemente el tipo de proyectos o trabajos]. Mi enfoque se centra en [menciona un valor o filosofía profesional], lo que me permite [resultado o impacto positivo de tu trabajo]. He colaborado con [tipos de clientes o empresas, si es relevante], donde he logrado [menciona un logro destacado o resultado medible]. Estoy siempre en búsqueda de nuevas oportunidades para aplicar mi experiencia en [menciona un área o tipo de trabajo específico], aportando soluciones innovadoras y efectivas para [menciona brevemente un objetivo o impacto que te motive].</p>
			</div>
		</div>
	);
}
