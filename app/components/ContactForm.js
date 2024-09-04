'use client'

import React from 'react';
import EmailIcon from '@mui/icons-material/Email';

const EmailContactForm = () => {
  const email = 'guillemvilapamies@gmail.com'; // Reemplaza con tu correo electrónico
  const subject = 'Asunto del correo'; // Puedes personalizar el asunto
  const body = 'Cuerpo del correo'; // Puedes personalizar el cuerpo del mensaje

  const handleClick = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <button className='btn-download' onClick={handleClick}>
      guillemvilapamies@gmail.com <EmailIcon className="btn-icon"/>
    </button>
  );
};

export default EmailContactForm;
