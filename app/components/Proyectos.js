import React from 'react';
import ProjectCard from './Boxs'; // Asegúrate de que el nombre del archivo coincida
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si';

const ProjectGallery = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '70px' }}>
      <div>
        <h4 className='pb-1 text-center'>FUT.SUPP</h4>
        <ProjectCard
          title="FUT.SUPP"
          imageUrl="/futsupp.png" // Ruta correcta desde la carpeta public
          githubUrl="https://github.com/Vila99/fut_supp"
          vercelUrl="https://fut-supp.vercel.app"
        />
        <div className="flex space-x-10 mt-4 text-center justify-content-center" style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
          <SiHtml5 className='btn-icon' style={{ fontSize: 35, color: '#fff'  }} />
          <SiCss3 className='btn-icon' style={{ fontSize: 35, color: '#fff' }} />
          <SiJavascript className='btn-icon' style={{ fontSize: 35, color: '#fff' }} />
          <SiReact className='btn-icon' style={{ fontSize: 35, color: '#fff' }} />
        </div>
      </div>
      {/* Agrega más ProjectCard según sea necesario */}
    </div>
  );
};

export default ProjectGallery;
