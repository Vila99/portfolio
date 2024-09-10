'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Modal } from 'react-bootstrap';

const certificates = [
  {
    id: 1,
    title: "Responsive con Bootstrap",
    issuer: "Mastermind",
    date: "2024",
    imageUrl: "/cb.png"
  },
  {
    id: 2,
    title: "Frontend",
    issuer: "Mastermind",
    date: "2024",
    imageUrl: "/cfrontend.png"
  },
  {
    id: 3,
    title: "HTML, CSS Y JS",
    issuer: "Mastermind",
    date: "2024",
    imageUrl: "/chtml.png"
  },
  {
    id: 4,
    title: "Node.js Experto",
    issuer: "Mastermind",
    date: "2024",
    imageUrl: "/cnode.png"
  }
];

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextCertificate = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getVisibleCertificates = () => {
    if (isMobile) {
      return [{ ...certificates[currentIndex], position: 0 }];
    }
    let visibleCerts = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + certificates.length) % certificates.length;
      visibleCerts.push({ ...certificates[index], position: i });
    }
    return visibleCerts;
  };

  return (
    <div className="container text-white py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-2 col-md-1 text-center">
          <button className="btn btn-light" onClick={prevCertificate} disabled={isTransitioning}>
            <i className="bi bi-chevron-left"></i>
          </button>
        </div>
        <div className="col-8 col-md-10">
          <div className="d-flex justify-content-center align-items-center position-relative" style={{ height: '400px', overflow: 'hidden' }}>
            {getVisibleCertificates().map((cert) => (
              <div 
                key={cert.id} 
                className="card bg-light text-dark position-absolute" 
                style={{
                  width: isMobile ? '100%' : (cert.position === 0 ? '340px' : '245px'),
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: isMobile ? 'none' : `
                    translateX(${cert.position * 140}%) 
                    scale(${cert.position === 0 ? 1 : 0.88})
                  `,
                  zIndex: cert.position === 0 ? 2 : 1,
                  opacity: isTransitioning ? 0.5 : 1,
                }}
                onClick={() => openModal(cert.imageUrl)}
              >
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  width={290}
                  height={164}
                  layout="responsive"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{cert.title}</h5>
                  <p className="card-text">
                    <small>{cert.issuer}</small>
                    <br />
                    <small className="text-muted">{cert.date}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-2 col-md-1 text-center">
          <button className="btn btn-light" onClick={nextCertificate} disabled={isTransitioning}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal} centered size="lg">
        <Modal.Body>
          <Image
            src={selectedImage}
            alt="Certificado"
            layout="responsive"
            width={800}
            height={600}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}