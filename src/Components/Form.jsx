
import React, { useState } from "react";

const Form = () => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const validarFormulario = (e) => {
    e.preventDefault();
    let isValid = true;
    const error = "Por favor verifique su información nuevamente";


    if (nombre.trim() === "" || nombre.length < 5) {
      setErrorNombre(error);
      isValid = false;
    } else {
      setErrorNombre("");
    }
    if (email.trim() === "") {
      setErrorEmail(error);
      isValid = false;
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)
    ) {
      setErrorEmail(error);
      isValid = false;
    } else {
      setErrorEmail("");
    }
    if (isValid) {
      setSuccessMessage("Gracias, te contactaremos lo antes posible vía email");
      console.log(successMessage);
    }
  };


  return (
    <div className="form">
      <form>
        <label>Nombre Completo</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        {errorNombre && <p>{errorNombre}</p>}
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errorEmail && <p>{errorEmail}</p>}
        {successMessage && <p>{successMessage}</p>}
        <button onClick={validarFormulario}>Enviar</button>
      </form>
    </div>
  );
};

export default Form;