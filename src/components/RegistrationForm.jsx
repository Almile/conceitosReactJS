import React, { useState } from 'react';
import WelcomeMessage from './WelcomeMessage'; // Importando o componente de boas-vindas

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name && formData.email && formData.password) {
      setSubmitted(true);
    } else {
      alert('Please, fill in all fields.');
    }
  };

  return (
    <div className='content'>
      <ul>
      {submitted ? (
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