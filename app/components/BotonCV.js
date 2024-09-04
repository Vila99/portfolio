'use client'

import React from 'react';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';

const DescargarBoton = () => {
  return (
    <a href="/CV-2024.pdf" download>
      <button className='btn-download'>CV <CloudDownloadOutlinedIcon className="btn-icon"/></button>
    </a>
  );
};

export default DescargarBoton;
