import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiTypescript, SiGithub, SiVisualstudiocode, SiNextdotjs } from 'react-icons/si';

const Cajaskills = ({ title, icons }) => {
  return (
    <Card className="border-hover"sx={{ 
      position: 'relative',
      border: '2px solid white',
      borderRadius: '8px',
      overflow: 'hidden',
      padding: '16px',
      backgroundColor: 'transparent',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
      },
    }}>
      <CardContent>
        <Typography variant="h5" component="div" className="text-white" sx={{ marginBottom: '16px', color: 'white' }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {icons.map((Icon, index) => (
            <Icon key={index} className="text-white" style={{ fontSize: '40px', color: 'white' }} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

// Responsive para movil?
const SkillsSection = () => {
  return (
    <div className="row g-4" style={{ display: 'flex', gap: '30px' }}>
      <div className="col-12 col-sm-6 col-lg-5">
      <Cajaskills 
        title="Frontend" 
        icons={[FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap]} 
      />
      </div>
      <div className="col-12 col-sm-6 col-lg-5">
      <Cajaskills 
        title="Tecnologías" 
        icons={[SiGithub, SiVisualstudiocode, SiNextdotjs]} 
      />
      </div>
      <div className="col-12 col-sm-6 col-lg-5">
      <Cajaskills 
        title="Aprendiendo" 
        icons={[FaPython, SiMysql, SiTailwindcss, SiTypescript]} 
      />
      </div>
      </div>
  );
};

export default SkillsSection;
