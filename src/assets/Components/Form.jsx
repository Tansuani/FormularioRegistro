import { useState } from 'react';

const Form = ({setAlert}) => {
  const [formData, setFormData] = useState({
    nombre:"",
    email:"",
    password:"",
    confirmPassword:"",
  });

  const validarDatos = (e) => {
    e.preventDefault();

    const { nombre, email, password, confirmPassword } = formData;
    const validarInputs = !nombre || !email || !password || !confirmPassword;
    const validarPassword = password !== confirmPassword;

    validarInputs
      ? setAlert({
          error: true,
          msg: "Ingresa los datos",
          color: "danger",
      })
      : setAlert({
        error: false,
        msg: "Ya estas suscrito",
        color: "success",
      });
    
    if (validarPassword) {
      setAlert({
        error: true,
        msg: "No coinciden los password",
        color: "danger",
      });

      return;
    }
    setFormData({
      nombre:"",
      email:"",
      password:"",
      confirmPassword:"",
    });
  }
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value});
};


  return (
    <>
      <form
        className="formulario"
        onSubmit={validarDatos}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="nombre"
              className="form-control"
              placeholder="Nombre"
              onChange={handleChange}
              value={formData.nombre}
              />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="tuemail@ejemplo.com"
              onChange={handleChange}
              value={formData.email}
              />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Contrasena"
              onChange={handleChange}
              value={formData.password}
              />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirma tu contrasena"
              onChange={handleChange}
              value={formData.confirmPassword}
              />
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-success"
            >
                Log In
            </button>
          </div>
        </form>
    </>
  );
};

export default Form;



{/*}
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "./Alerts/Alertemail"

import { useState } from "react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false)

  const validarDatos = (e) => {
    e.preventDefault()
    
    if(nombre === '' || apellido === '' || edad === '' || email === '') {
        setError(true)
        return
    }
    setError(false)
    setNombre('')
    setApellido('')
    setEdad('')
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
          <label>Edad</label>
          <input
            type="text"
            name="edad"
            className="form-control"
            onChange={(e) => setEdad(e.target.value)}
            value={edad}
          />
          {}
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
      {nombre} - {apellido} - {edad} - {email}
    </>
  );
};

export default Form;
*/}