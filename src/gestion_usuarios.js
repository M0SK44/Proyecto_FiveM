import React, { useState } from 'react';
import logo from './LOGOTIPO.png'; // Asegúrate de que la ruta sea correcta
import personaje_control_panel from './personaje_control_panel.png'; // Asegúrate de que la ruta sea correcta

import './conectado.css'; // Si tienes estilos personalizados
import { Navigate } from 'react-router-dom'; // Importa Navigate

function App() {
  const [loggedOut, setLoggedOut] = useState(false); // Estado para manejar el logout

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setLoggedOut(true); // Cambia el estado para activar la redirección
  }

  // Si el estado loggedOut es true, redirigir a /App
  if (loggedOut) {
    return <Navigate to="/App" />;
  }

  return (
    <div className="App"> {/* Contenedor principal */}
        <img src={personaje_control_panel} className="App-personaje_control_panel" alt="personaje_control_panel" />
      <div className='inicio'>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={{ color: 'rgba(0, 255, 203, 1)' }}>GESTION DE SERVIDOR</h2>

        <button className="login-button" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="login-icon"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z" />
          </svg>
          TESTING
        </button>
        <br />

        <button className="login-button" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="login-icon"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z" />
          </svg>
          VEHICULOS
        </button>
        <br />

        <button className="login-button" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="login-icon"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z" />
          </svg>
          ENTREGA DE VIPs
        </button>
        <br />

        <button className="login-button" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="login-icon"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          ADMINISTRADORES
        </button>
        <br />

        <button className="cerrarsesion-button" type="submit" onClick={handleLogout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="login-icon"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          CERRAR SESIÓN
        </button>
        <br />
      </div>
      {/* Otros elementos de la interfaz */}
    </div>
  );
}

export default App;
