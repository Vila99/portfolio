'use client';

import React from 'react';
import ProjectBox from './Proyectos'
import SobreMi from './SobreMi'
import ContactForm from '../components/ContactForm';
import CajaSkills from '../components/CajaSkills';
import Certificates from './Certificados';

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




    {/* CERTIFICADOS */}
      <div id='certificados' className="container section-container py-5 mt-3 border-top">
        <div className="col-12 col-md-4 text-left mb-4">
          <h1 className="mb-0">CERTIFICADOS.</h1>
        </div>
        <Certificates/>
      </div>



      <div id="contacto" className="container section-container mt-5 border-top contacto-h">
        <h1 className="fw-b section-title pt-5 mt-4">CONTACTO.</h1>
        <div className="container mx-auto">
        <p className="mb-8 pt-3 fs-5 lead">
          Si estás interesado o tienes cualquier pregunta, no dudes en ponerte en contacto conmigo!
        </p>
        <div className="flex justify-center mb-5 pb-5 pt-3 text-center">
          <ContactForm />
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContentComponent;
