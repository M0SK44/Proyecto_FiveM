import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Conectado from './conectado'; // Asegúrate de que este archivo exista

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/conectado" element={<Conectado />} /> {/* Ruta para la página conectada */}
            <Route path="/App" element={<App />} /> {/* Ruta para la página conectada */}
        </Routes>
    </Router>
);
