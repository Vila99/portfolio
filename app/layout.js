import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import ThemeProviderClient from './provider/ThemeProviderClient';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GV2024 - Portfolio',
  description: 'My personal portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <ThemeProviderClient>
          <Navbar />
          <main>{children}</main>
          <footer className="d-flex flex-wrap justify-content-between align-items-center border-top px-3 py-2 bg-main py-3">
            <p className="col-12 col-md-4 mb-0 text-white ps-3 ps-md-5 text-center text-md-start">
              © 2024 Vila99, Inc
            </p>
            <a
              href="#"
              className="col-12 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-white text-center"
            >
              GV2024
            </a>
            <ul className="nav col-12 col-md-4 justify-content-center justify-content-md-end">
              <li className="nav-item">
                <a href="#sobre-mi" className="nav-link px-2 text-white">
                  Sobre mí
                </a>
              </li>
              <li className="nav-item">
                <a href="#proyectos" className="nav-link px-2 text-white">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link px-2 text-white">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#certificados" className="nav-link px-2 text-white">
                  Certificados
                </a>
              </li>
              <li className="nav-item">
                <a href="#contacto" className="nav-link px-2 text-white pe-3 pe-md-5">
                  Contacto
                </a>
              </li>
            </ul>
          </footer>
        </ThemeProviderClient>
        
        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          strategy="lazyOnload"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}