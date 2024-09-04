import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GV2024 - Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {/* NAVBAR FIXED */}
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
                <li className="nav-item active">
                  <a className="nav-link text-white" href="#sobre-mi">
                    SOBRE MÍ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#proyectos">
                    PROYECTOS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#contacto">
                    CONTACTO
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {children}

        <footer className="d-flex flex-wrap justify-content-between align-items-center border-top px-3 py-2 bg-main py-3">
          <p className="col-12 col-md-4 mb-0 text-white ps-3 ps-md-5 text-center text-md-start">
            © 2024 Vila99, Inc
          </p>
          <a
            href="/"
            className="col-12 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none text-white text-center"
          >
            GV2024
          </a>
          <ul className="nav col-12 col-md-4 justify-content-center justify-content-md-end">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                Sobre mí
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white pe-3 pe-md-5">
                Contacto
              </a>
            </li>
          </ul>
        </footer>

        {/* Bootstrap JS and dependencies (Popper.js) */}
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
}
