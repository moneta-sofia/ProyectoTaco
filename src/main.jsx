import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './components/Category.jsx';
import NotFound from './components/NotFound.jsx';
import InProgress from './components/InProgress.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import { ImagesProvider } from './contexts/imagesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ImagesProvider>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/ilustration" element={<InProgress />} />
				<Route path="/characterDesign" element={<Category name={'characterDesign'} />} />
				<Route path="/backgroundDesign" element={<Category name={'backgroundDesign'} />} />
				<Route path="/animation" element={<Category name={'animation'} />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</ImagesProvider>
	</BrowserRouter>
);
