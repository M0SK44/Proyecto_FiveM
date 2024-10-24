import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom"; // Importa useNavigate
import logo from "./LOGOTIPO.png"; // Asegúrate de que la ruta sea correcta
import personaje_control_panel from "./personaje_control_panel.png"; // Asegúrate de que la ruta sea correcta

import "./conectado.css"; // Si tienes estilos personalizados

function App() {
  const [loggedOut, setLoggedOut] = useState(false); // Estado para manejar el logout
  const navigate = useNavigate(); // Obtén la función de navegación

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setLoggedOut(true); // Cambia el estado para activar la redirección
  };

  // Si el estado loggedOut es true, redirigir a /App
  if (loggedOut) {
    return <Navigate to="/App" />;
  }

  const ir_gestion_usuarios = () => {
    navigate("/gestion_usuarios"); // Usa navigate para redirigir
  };
  const ir_gestion_vehiculos = () => {
    navigate("/gestion_vehiculos"); // Usa navigate para redirigir
  };

  return (
    <div className="App">
      {" "}
      {/* Contenedor principal */}
      <img
        src={personaje_control_panel}
        className="App-personaje_control_panel"
        alt="personaje_control_panel"
      />
      <div className="inicio">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={{ color: "rgba(0, 255, 203, 1)" }}>GESTION DE SERVIDOR</h2>

        <button
          className="login-button"
          type="submit"
          onClick={ir_gestion_usuarios}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="login-icon"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z" />
          </svg>
          USUARIOS
        </button>
        <br />

        <button
          className="login-button"
          type="submit"
          onClick={ir_gestion_vehiculos}
        >
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
            <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          ADMINISTRADORES
        </button>
        <br />

        <button
          className="cerrarsesion-button"
          type="submit"
          onClick={handleLogout}
        >
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
      <div className="crudusuarios">
        <div className="busqueda-usuario">
          <input
            type="text"
            placeholder="Buscar licencia, patente..."
            className="search-input"
          />
          <button className="buscar-button" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="buscar-icon"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            Revisar
          </button>
        </div>

        <table className="custom-table">
          <thead>
            <tr>
              <th>Licencia del dueño</th>
              <th>Patente</th>
              <th>Vehículo</th>
              <th>Aparcamiento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>178aacf080b987f0ce058c861353d63ae3af881d</td>{" "}
              {/* Ejemplo de licencia */}
              <td>ABC-123</td> {/* Ejemplo de patente */}
              <td>Zentorno</td> {/* Modelo de vehículo de GTA V */}
              <td>Aparcamiento Norte</td> {/* Ubicación de aparcamiento */}
            </tr>
            <tr>
              <td>1b9fc08407de354cead172845d1c43dfd09a1b8a</td>{" "}
              {/* Otra licencia */}
              <td>XYZ-789</td> {/* Otra patente */}
              <td>Sultan RS</td> {/* Modelo de vehículo de GTA V */}
              <td>Aparcamiento Este</td> {/* Otro aparcamiento */}
            </tr>
            <tr>
              <td>9d7eb0381d7fa0346c9d9b93fa7487b08d7e65ba</td>{" "}
              {/* Otra licencia */}
              <td>LMN-456</td> {/* Otra patente */}
              <td>Adder</td> {/* Modelo de vehículo de GTA V */}
              <td>Aparcamiento Sur</td> {/* Otro aparcamiento */}
            </tr>
          </tbody>
        </table>
      </div>
      {/* Otros elementos de la interfaz */}
    </div>
  );
}

export default App;
