
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './components/Category.jsx';
import NotFound from './components/NotFound.jsx';
import InProgress from './components/InProgress.jsx';
import Login from './components/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/characterDesign" element={<Category name={'characterDesign'} />} />
        <Route path="/animation" element={<InProgress />} />
        <Route path="/backgroundDesign" element={<Category name={'backgroundDesign'}/>} />
        <Route path="/ilustration" element={<InProgress />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Login />} /> */}
        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
)
