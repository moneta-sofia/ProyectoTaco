import { Carousel } from './components/Carousel';
import TacosInfo from './components/TacosInfo';
import UserOptions from './components/UserOptions';

function App() {
	return (
		<>
			<div className="base flex items-center flex-col">
				<div className="fixed xl:bottom-10 bottom-3 xl:left-10 left-3 ">
					<UserOptions />
				</div>
				<section className="w-full h-2/3 flex flex-col items-center">
					<Carousel />
				</section>
				<TacosInfo/>
			</div>
		</>
	);
}

export default App;
