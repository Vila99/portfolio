import React from 'react';
import ProjectCard from './Boxs'; // Asegúrate de que el nombre del archivo coincida
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiTailwindcss, SiTypescript } from 'react-icons/si';

const ProjectGallery = () => {
  return (
    <div className='row g-4' style={{ display: 'flex', flexWrap: 'wrap', gap: '70px' }}>
      <div className='col-12 col-sm-6 col-lg-5'>
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
          <SiBootstrap className='btn-icon' style={{ fontSize: 35, color: '#fff' }} />
        </div>
      </div>
      {/* Agrega más ProjectCard según sea necesario */}
      <div className='col-12 col-sm-6 col-lg-5'>
        <h4 className='pb-1 text-center'>MYAPP v.2</h4>
        <ProjectCard
          title="MYAPP"
          imageUrl="/myappv2.png" // Ruta correcta desde la carpeta public
          githubUrl="https://github.com/Vila99/dayappv2"
          vercelUrl="https://myappv2-red.vercel.app"
        />
        <div className="flex space-x-10 mt-4 text-center justify-content-center" style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
          <SiHtml5 className='btn-icon' style={{ fontSize: 35, color: '#fff'  }} />
          <SiCss3 className='btn-icon' style={{ fontSize: 35, color: '#fff' }} />
          <SiTypescript className='btn-icon' style={{ fontSize: 35, color: '#fff' }} />
          <SiReact className='btn-icon' style={{ fontSize: 35, color: '#fff' }} />
          <SiTailwindcss className='btn-icon' style={{ fontSize: 35, color: '#fff' }} />
        </div>
        </div>
              {/* Agrega más ProjectCard según sea necesario */}
              <div className='col-12 col-sm-6 col-lg-5'>
          <h4 className='pb-1 text-center'>MYAPP v.1</h4>
          <ProjectCard
            title="MYAPP"
            imageUrl="/myapp.png" // Ruta correcta desde la carpeta public
            githubUrl="https://github.com/Vila99/myapp"
            vercelUrl="https://myapp-v1gv.vercel.app"
          />
          <div className="flex space-x-10 mt-4 text-center justify-content-center" style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
            <SiHtml5 className='btn-icon' style={{ fontSize: 35, color: '#fff'  }} />
            <SiCss3 className='btn-icon' style={{ fontSize: 35, color: '#fff' }} />
            <SiJavascript className='btn-icon' style={{ fontSize: 35, color: '#fff' }} />
            <SiReact className='btn-icon' style={{ fontSize: 35, color: '#fff' }} />
            <SiBootstrap className='btn-icon' style={{ fontSize: 35, color: '#fff' }} />
          </div>
        </div>
    </div>
  );
};

export default ProjectGallery;
