import React from 'react';
import EmailIcon from '@mui/icons-material/Email';

const EmailContactForm = () => {
  const email = 'guillemvilapamies@gmail.com'; // Reemplaza con tu correo electrónico
  const subject = 'Asunto del correo'; // Puedes personalizar el asunto
  const body = 'Cuerpo del correo'; // Puedes personalizar el cuerpo del mensaje

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <a>
      <button className='btn-download'>guillemvilapamies@gmail.com <EmailIcon className="btn-icon"/></button>
    </a>

  );
};

export default EmailContactForm;