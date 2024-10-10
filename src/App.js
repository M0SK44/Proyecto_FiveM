import React, { useState, useEffect } from 'react';
import logo from './LOGOTIPO.png'; // Asegúrate de que la ruta sea correcta
import personaje_login from './personaje_login.png'; // Asegúrate de que la ruta sea correcta
import personaje_login2 from './personaje_login2.png';
import './App.css'; // Si tienes estilos personalizados
import { Navigate } from 'react-router-dom'; // Importa Navigate

function App() {
  // Estado para manejar los campos del formulario y el mensaje de error
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para manejar la autenticación

  // Función para manejar el envío del formulario
  const handleLogin = (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario

    // Validación simple
    if (username === 'admin' && password === '1234') {
      alert('Iniciaste sesión con éxito');
      setError(''); // Limpiar el mensaje de error
      setIsLoggedIn(true); // Actualiza el estado a autenticado
    } else {
      setError('Credenciales del servidor erróneas.');

      // Después de 5 segundos, cambiar el mensaje y limpiar los campos
      setTimeout(() => {
        setError('Vuelve a intentarlo.');
        setUsername(''); // Restablecer el campo de usuario
        setPassword(''); // Restablecer el campo de contraseña

        // Después de 5 segundos más, limpiar el mensaje de error
        setTimeout(() => {
          setError(''); // Limpiar el mensaje
        }, 2000); // 5000 milisegundos más = 5 segundos adicionales

      }, 5000); // Primer temporizador para cambiar el mensaje

    }
  };

  // Redirigir si el usuario ha iniciado sesión
  if (isLoggedIn) {
    return <Navigate to="/conectado" />;
  }

  return (
    <div className="App">
      <img
        src={personaje_login}
        className="App-personaje_login"
        alt="personaje_login"
      />

      <img
        src={personaje_login2}
        className="App-personaje_login2"
        alt="personaje_login2"
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tu usuario"
              required
              className="input-field"
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
              className="input-field"
            />
          </div>
          <button className="login-button" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="login-icon"
            >
              <path d="M10 17l5-5-5-5v10zm9 5v-2H9v2H7v-2H2V2h18v18h-1zm-2-2V4H4v14h2v-2h11v2h2z" />
            </svg>
            Conectarse
          </button>
        </form>
        {error && <p style={{ color: 'rgba(255, 93, 93, 1)' }}>{error}</p>}
        <p className="©">2024 © TIKI TI ROLEPLAY</p>
      </header>
    </div>
  );
}

export default App;
