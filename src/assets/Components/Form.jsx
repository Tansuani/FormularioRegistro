import { useState } from 'react';
import Swal from 'sweetalert2'

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
          msg: Swal.fire('Ingresa los datos'),
          color: "danger",
      })
      : setAlert({
        error: false,
        msg: Swal.fire('Ya estas suscrito'),
        color: "success",
      });
    
    if (validarPassword) {
      setAlert({
        error: true,
        msg: Swal.fire('Verifica las claves'),
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

