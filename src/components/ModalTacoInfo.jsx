import { IoCloseOutline } from 'react-icons/io5';
import { garabato, tacoPhoto } from '../assets/img/images';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export default function ModalTacoInfo({ setModalInfo }) {
	const { isSpanish } = useContext(LanguageContext);

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
					{isSpanish ?
						<>
							<p className="text-center xl:text-left my-2">Artista, Ilustrador, Diseñador Grafico.</p>
							<p className="text-center xl:text-left my-2">Animación es mi medio y soy el indicado para el trabajo.</p>
							<p className="text-center xl:text-left my-2">Freelancer de Argentina con gran interesa sobre composición limpia y colores fuertes.</p>
							<p className="text-center xl:text-left my-2">El arte es mi pasión, por eso todo lo que hago tiene un estudio especial con dedicación sin excepción.</p>
							<p className="text-center xl:text-left my-2">Para conocer el proceso de como logro mis trabajos pueden de ver el resto de mi portafolio.</p>
						</>
						:
						<>
							<p className="text-center xl:text-left my-2"> Artist, illustrator and Graphic Designer.</p>
							<p className="text-center xl:text-left my-2">Animation is the medium and I'm the one for the job.</p>
							<p className="text-center xl:text-left my-2">I'm a freelancer from Argentina and my interest is clean composition but strong colors.</p>
							<p className="text-center xl:text-left my-2">Art is my passion, so everything I do has a special study and dedication without exception.</p>
							<p className="text-center xl:text-left my-2">For more inside and what I do feel free to see the rest of my portfolio</p>
						</>
					}
				</div>
				{window.innerWidth > 1280 && <img src={tacoPhoto} alt="Fotografia de Diego" className="absolute -bottom-20 -right-6 w-56 shadow-xl  rounded-xl border-solid border-2 border-black" />}
				{window.innerWidth > 1280 && <img src={garabato} alt="Artist persona" className="absolute top-3 right-5 w-36 " />}
			</div>
		</div>
	);
}
