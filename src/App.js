import { useState } from 'react';
import './App.css';
import emailjs from "@emailjs/browser"

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    if (name === '' || email === '' || message ==='') {
      alert('Prencha todos os campos')
    }

    const templateParams = {
      from_name: name,
      messagem: message,
      email: email
    }

    emailjs.send("service_kzx7pon", "template_qqnhu1q", templateParams, 'WgRxpjx3_IJQQCmaJ')
    .then((response) => {
      console.log("Email Enviado", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log("erro", err)
    })
  }

  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default App;
