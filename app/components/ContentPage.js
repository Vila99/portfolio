'use client';

import React, { useEffect, useState } from 'react';
import ProjectBox from './Proyectos'
import SobreMi from './SobreMi'
import ContactForm from '../components/ContactForm';

const ContentComponent = () => {
  return (
    <section>
      <div id="sobre-mi" className="container section-container">
        <h1 className="fw-light section-title text-center">SOBRE MÍ.</h1>
        <p className="lead pt-4 ">
          Después de 5 años cursando ADE en la Universitat de Barcelona, decidí
          ampliar mis conocimientos en programación y edición de contenidos.
          Esta actividad es mucho más coherente respecto a mis intereses y
          hobbies. Además, las oportunidades laborales vinculadas al sector
          multimedia resultan mucho más atractivas, por proyecto y valorización de
          competencias. Actualmente, me encuentro desarrollando y aprendiendo
          nuevas habilidades para trabajar en estos nuevos campos.
        </p>
      </div>

      <div id="proyectos" className="container section-container py-5 mt-5">
        <h1 className="fw-b section-title pb-4 text-center">PROYECTOS.</h1>
        <div className="d-flex justify-content-center">
          <ProjectBox />
        </div>
      </div>


      <div id="contacto" className="container section-container px-5 mt-5">
        <h1 className="fw-b section-title text-center">CONTACTO.</h1>
        <div className="container mx-auto text-center">
        <p className="mb-8 pt-3 fs-5 lead">
          Si estás interesado o tienes cualquier pregunta, no dudes en ponerte en contacto conmigo!
        </p>
        <div className="flex justify-center py-4">
          <ContactForm />
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContentComponent;
