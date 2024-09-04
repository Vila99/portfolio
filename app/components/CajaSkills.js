import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiTypescript } from 'react-icons/si';

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

const SkillsSection = () => {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Cajaskills 
        title="Frontend" 
        icons={[FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap]} 
      />
      <Cajaskills 
        title="Aprendiendo" 
        icons={[FaPython, SiMysql, SiTailwindcss, SiTypescript]} 
      />
    </div>
  );
};

export default SkillsSection;
