import React from 'react';
import { Timeline } from 'primereact/timeline';

const BootstrapStyledTimeline = () => {
    const events = [
        { status: 'Grado de Multimédia', date: '', description: 'UOC', opposite: '2022 - Present' },
        { status: 'Trading', date: '', description: 'ADTR', opposite: '2021 - 2022' },
        { status: 'Grado de Administración de empresas', date: 'UB', description: '', opposite: '2017 - 2021' },
    ];

    const customizedContent = (item) => {
        return (
            <div className="ms-3">
                <h3 className="fs-5 mb-1 text-white fw-light">{item.status}</h3>
                <p className="small text-light mb-1 fw-light">{item.date}</p>
                <p className="small text-white fw-light">{item.description}</p>
            </div>
        );
    };

    const customizedOpposite = (item) => {
        return (
            <div className="me-3 text-end">
                <span className="text-white fw-light">{item.opposite}</span>
            </div>
        );
    };

    const customizedMarker = () => {
        return (
            <span className="d-flex justify-content-center align-items-center rounded-circle bg-white fw-light" 
                  style={{width: '1rem', height: '1rem'}} />
        );
    };

    return (
        <div id='#sobre-mi' className="row">
            <div className="col-12 col-lg-6 ">
                <div className="card bg-transparent pt-5 border-none" style={{maxWidth: '600px', border:'none'}}>
                    <h3 className='text-center text-light pb-4 fw-light'>Mis estudios</h3>
                    <Timeline 
                        value={events} 
                        content={customizedContent}
                        opposite={customizedOpposite} 
                        marker={customizedMarker}
                        className="text-white fw-light pb-5"
                        align="left"
                    />
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="pt-5">
                    <h3 className='pb-2 fw-light'>¿Qué busco?</h3>
                    <p className='pb-2 fw-light fs-5'>Tras completar cinco años de ADE en la Universitat de Barcelona, decidí enfocarme en programación y edición de contenidos, 
                        áreas que se alinean más con mis intereses y hobbies. Actualmente, estoy a mitad de carrera y en búsqueda de mi primer trabajo 
                        como junior en el sector multimedia, donde veo más oportunidades y proyección profesional.</p>
                </div>
            </div>
        </div>
    );
    
    
};

export default BootstrapStyledTimeline;