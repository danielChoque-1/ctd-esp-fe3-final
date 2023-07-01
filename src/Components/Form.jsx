import React, {useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [errorNombre, setErrorNombre] = useState('')
  const [errorEmail, setErrorEmail] = useState('')


  const validarFormulario = () => {
    let isValid = true
  

  if (nombre.trim() == '' && nombre.length < 5) {
    setErrorNombre('Por favor verifique su información nuevamente')
    isValid = false
  } else {
    setErrorNombre('')
  }

  if(email.trim() == '') {
    setErrorEmail('Por favor verifique su información nuevamente')
    isValid = false
  } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
    setErrorEmail('Por favor verifique su información nuevamente')
    isValid = false
  } else {
    setErrorEmail('')
  }

  if (isValid) {
    console.log('Gracias' + nombre, ' ,te contactaremos cuando antes vía mail');
  }

}
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
        
        <button onClick={validarFormulario}>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
