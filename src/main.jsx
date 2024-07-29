
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './components/Category.jsx';
import NotFound from './components/NotFound.jsx';
import InProgress from './components/InProgress.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/characterDesign" element={<Category name={'characterDesign'} />} />
        <Route path="/animation" element={<InProgress />} />
        <Route path="/backgroundDesign" element={<InProgress />} />
        <Route path="/ilustration" element={<InProgress />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
)
