'use client';

import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import BotonCV from './BotonCV'

const MainComponent = () => {
  const [isClient, setIsClient] = useState(false);


  // Se monta despues del cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="masthead bg-main">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="titulo-main">
              {isClient && (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('¡Hello!')
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("I'm Guillem Vila.")
                      .start();
                  }}
                />
              )}
            </h1>
            <p className="lead fs-4">
              Frontend Developer.
            </p>
            <p className="lead fs-4">
              "Always learning and improving to create better web designs."
            </p>
            <BotonCV/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainComponent;
