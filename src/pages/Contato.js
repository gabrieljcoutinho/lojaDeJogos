import React, { useState, useEffect } from 'react';
import '../CSSdeCadaPagina/contato.css';

const Contato = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    endereco: '',
    mensagem: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.nome) {
      newErrors.nome = 'Por favor, insira seu nome.';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Por favor, insira seu email.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor, insira um email válido.';
      isValid = false;
    }

    if (!formData.endereco) {
      newErrors.endereco = 'Por favor, insira seu endereço.';
      isValid = false;
    }

    if (!formData.mensagem) {
      newErrors.mensagem = 'Por favor, insira sua mensagem.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/send-email', { // Ajuste a URL se necessário
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowAlert(true);
        setFormData({ nome: '', email: '', endereco: '', mensagem: '' });
        setErrors({});
      } else {
        setShowErrorAlert(true);
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setShowErrorAlert(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  useEffect(() => {
    if (showErrorAlert) {
      const timer = setTimeout(() => {
        setShowErrorAlert(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showErrorAlert]);

  return (
    <div className="contact-container">
      {showAlert && (
        <div className="alert success-alert show">
          Mensagem enviada com sucesso!
        </div>
      )}
      {showErrorAlert && (
        <div className="alert error-alert show">
          Erro ao enviar a mensagem.
        </div>
      )}

      <div className="contact-content">
        <h2 className="contact-title">Entre em contato</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} />
          {errors.nome && <p className="error-message">{errors.nome}</p>}

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <label htmlFor="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} />
          {errors.endereco && <p className="error-message">{errors.endereco}</p>}

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} />
          {errors.mensagem && <p className="error-message">{errors.mensagem}</p>}

          <button type="submit" disabled={isLoading} className="submit-button">
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contato;