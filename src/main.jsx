import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './components/Category.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/characterDesign" element={<Category />} />
        <Route path="/animation" element={<Category />} />
        <Route path="/backgroundDesign" element={<Category />} />
        <Route path="/ilustration" element={<Category />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
