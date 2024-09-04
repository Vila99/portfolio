'use client';

import { useEffect } from 'react';
import SwitchClient from './SwitchClient';
import Link from 'next/link';

const Navbar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const updateActiveLink = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

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

    if (navbarCollapse && navbarToggler) {
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-main">
      <div className="container">
        <Link href="/" className="navbar-brand fs-3 text-white">
          ./GV2024
        </Link>
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
              <Link href="#sobre-mi" className="nav-link text-white" onClick={handleNavLinkClick}>
                SOBRE MÍ
              </Link>
            </li>
            <li className="nav-item bg-main">
              <Link href="#proyectos" className="nav-link text-white" onClick={handleNavLinkClick}>
                PROYECTOS
              </Link>
            </li>
            <li className="nav-item bg-main">
              <Link href="#skills" className="nav-link text-white" onClick={handleNavLinkClick}>
                SKILLS
              </Link>
            </li>
            <li className="nav-item bg-main">
              <Link href="#contacto" className="nav-link text-white" onClick={handleNavLinkClick}>
                CONTACTO
              </Link>
            </li>
            <SwitchClient />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;