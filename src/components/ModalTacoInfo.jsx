import { IoCloseOutline } from 'react-icons/io5';
import { garabato, tacoPhoto } from '../assets/img/images';

export default function ModalTacoInfo({ setModalInfo }) {
	return (
		<div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center backdrop-blur-sm">
			{window.innerWidth < 1280 && (
				<button onClick={() => setModalInfo(false)} className="absolute top-0 right-0 xl:m-10 m-3 z-30">
					<IoCloseOutline color="white" size={40} />
				</button>
			)}
			<div className="w-screen h-screen bg-black opacity-50 fixed z-10 top-0 left-0 " onClick={() => setModalInfo(false)} />
			<div className=" relative bg-stone-900 w-10/12 xl:w-7/12 xl:mt-0 mt-16 h-fit xl:px-8 p-4 pt-5 pb-4 z-20 flex flex-col justify items-center xl:items-start  rounded-xl">
				<div className="absolute xl:-top-8 -top-12 xl:-left-10 bg-white p-5 px-10 rounded-xl">
					<h1 className="text-black xl:text-3xl text-xl">HI! I'M DIEGO MARCELO RUIZ</h1>
				</div>

				<div className=" xl:mt-16 mt-8 m-2 xl:m-10 xl:w-9/12 w-11/12 ">
					<p className="text-center xl:text-left my-2"> Soy un generalista en artes visuales digitales con experiencia en diseño y desarrollo de conceptos para medios de animación. Cuento con varios años de experiencia en diseño gráfico, habiendo trabajado como diseñador junior en Psycosoft, una empresa dedicada al diseño y desarrollo de aplicaciones.</p>
					<p className="text-center xl:text-left my-2">Estoy interesado en adentrarme completamente en el ámbito de la animación. Mi enfoque se centra en un diseño sólido y en la cohesión visual, lo que me permite crear tanto personajes como fondos que no solo destacan por su estética, sino que también mantienen una coherencia estilística que refuerza la identidad de la marca o del proyecto.</p>
					<p className="text-center xl:text-left my-2">Estoy siempre en búsqueda de nuevas oportunidades para aplicar mi experiencia en proyectos que me desafíen a ser creativo y a colaborar en equipo.</p>
				</div>
				{window.innerWidth > 1280 && <img src={tacoPhoto} alt="Fotografia de Diego" className="absolute -bottom-10 -right-16 w-56 shadow-xl  rounded-xl border-solid border-2 border-black" />}
				{window.innerWidth > 1280 && <img src={garabato} alt="Artist persona" className="absolute top-10 right-5 w-36 " />}
			</div>
		</div>
	);
}
