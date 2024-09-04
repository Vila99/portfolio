'use client';

import React, { useEffect, useState } from 'react';
import ProjectBox from './Proyectos'
import SobreMi from './SobreMi'
import ContactForm from '../components/ContactForm';
import CajaSkills from '../components/CajaSkills';

const ContentComponent = () => {
  return (
    <section>
      <div id="sobre-mi" className="container section-container border-bottom">
        <h1 className="fw-b section-title">SOBRE MÍ.</h1>
        <SobreMi/>
      </div>

      <div id="proyectos" className="container section-container py-5 mt-3">
        <h1 className="fw-b section-title pb-4">PROYECTOS.</h1>
        <div className="d-flex justify-content-center">
          <ProjectBox />
        </div>
      </div>


      <div id="skills" className="container section-container py-5 mt-3 border-top">
        <h1 className="fw-b section-title pb-4">SKILLS.</h1>
        <div className="d-flex justify-content-center">
          <CajaSkills/>
        </div>
      </div>


      <div id="contacto" className="container section-container mt-5 border-top">
        <h1 className="fw-b section-title pt-5">CONTACTO.</h1>
        <div className="container mx-auto">
        <p className="mb-8 pt-3 fs-5 lead">
          Si estás interesado o tienes cualquier pregunta, no dudes en ponerte en contacto conmigo!
        </p>
        <div className="flex justify-center pb-5 pt-3 text-center">
          <ContactForm />
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContentComponent;
