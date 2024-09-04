'use client'

import { useEffect } from 'react';
import SwitchClient from './SwitchClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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

  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

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
        <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item bg-main">
              <a className="nav-link text-white" href="#sobre-mi" onClick={handleNavLinkClick}>
                SOBRE MÍ
              </a>
            </li>
            <li className="nav-item bg-main">
              <a className="nav-link text-white" href="#proyectos" onClick={handleNavLinkClick}>
                PROYECTOS
              </a>
            </li>
            <li className="nav-item bg-main">
              <a className="nav-link text-white" href="#skills" onClick={handleNavLinkClick}>
                SKILLS
              </a>
            </li>
            <li className="nav-item bg-main">
              <a className="nav-link text-white" href="#contacto" onClick={handleNavLinkClick}>
                CONTACTO
              </a>
            </li>
            <SwitchClient />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
