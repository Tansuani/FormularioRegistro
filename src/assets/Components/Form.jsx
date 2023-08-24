import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "./Alerts/Alertemail"

import { useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false)

  const validarDatos = (e) => {
    e.preventDefault()
    
    if(nombre === '' || apellido === '' || password === '' || email === '' || password !== password2 ) {
        setError(true)
        return
    }
    setError(false)
    setNombre('')
    setApellido('')
    setPassword('')
    setPassword2('')
    setEmail('')
  }

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            className="form-control"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        <div className="form-group">
          <label>Confirma Contraseña</label>
          <input
            type="password"
            name="password2"
            className="form-control"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <h1>Datos ingresados</h1>
      {nombre} - {apellido} - {email}
    </>
  );
};

export default Form;