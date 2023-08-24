

const Form = () => {
  return (
    {/*<div>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet"> 

      <div class="container">
        <form >
          <p>Welcome</p>
          <input type="email" placeholder="Email"><br>
          <input type="password" placeholder="Password"><br>
          <input type="button" value="Sign in"><br>
          <a href="#">Forgot Password?</a>
        </form>

        <div class="drops">
          <div class="drop drop-1"></div>
          <div class="drop drop-2"></div>
          <div class="drop drop-3"></div>
          <div class="drop drop-4"></div>
          <div class="drop drop-5"></div>
        </div>
      </div>
  </div>*/}
  )
}

export default Form





{/*
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

