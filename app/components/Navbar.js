'use client'

import { useEffect } from 'react';
import SwitchClient from './SwitchClient';

const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const updateActiveLink = () => {
      let scrollPosition = window.scrollY + window.innerHeight / 2;

      navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    };

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Call on initial render

    return () => {
      window.removeEventListener('scroll', updateActiveLink);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-main">
      <div className="container">
        <a className="navbar-brand fs-3 text-white" href="#">
          ./GV2024
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item bg-main">
              <a className="nav-link text-white" href="#sobre-mi">
                SOBRE MÍ
              </a>
            </li>
            <li className="nav-item bg-main">
              <a className="nav-link text-white" href="#proyectos">
                PROYECTOS
              </a>
            </li>
            <li className="nav-item bg-main">
              <a className="nav-link text-white" href="#skills">
                SKILLS
              </a>
            </li>
            <li className="nav-item bg-main">
              <a className="nav-link text-white" href="#contacto">
                CONTACTO
              </a>
            </li>
            <SwitchClient/>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
