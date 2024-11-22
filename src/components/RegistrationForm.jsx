import React, { useState } from 'react';
import WelcomeMessage from './WelcomeMessage'; // Importando o componente de boas-vindas

function RegistrationForm() {
   // Estado com os dados do formulário (nome, email e senha)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
 // Função para atualizar o estado do formulário quando um campo é alterado
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Função chamada ao submeter o formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página
    if (formData.name && formData.email && formData.password) {
      // Marca o formulário como submetido
      setSubmitted(true);
    } else {
      alert('Por favor preencha todos os campos.');
    }
  };

  return (
    <div className='content'>
      <ul>
      {submitted ? (
        // Se o formulário foi enviado corretamente, exibe a mensagem de boas-vindas
        <WelcomeMessage name={formData.name}/>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label> Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}/>

          <label>Email:  </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}/>
         
          <label>Password: </label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />

          <button type="submit">Fazer Login</button>
        </form>
      )}
      </ul>
    </div>
  )
}

export default RegistrationForm;