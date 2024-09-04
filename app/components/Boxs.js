import React from 'react';
import { Card, CardMedia, CardContent, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch'; // Usando Launch icon para Vercel

const ProjectCard = ({ title, imageUrl, githubUrl, vercelUrl }) => {
  return (
    <Card sx={{ 
      position: 'relative',
      border: '2px solid white',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
      },
    }}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        sx={{
          height: '150px',
          objectFit: 'cover',
          borderBottom: '2px solid white',
        }}
      />
      
      <CardContent sx={{ position: 'absolute', bottom: '0', left: '0', right: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
        <Tooltip title="GitHub" arrow>
          <IconButton href={githubUrl} target="_blank" sx={{ color: 'white' }}>
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Vercel" arrow>
          <IconButton href={vercelUrl} target="_blank" sx={{ color: 'white' }}>
            <LaunchIcon />
          </IconButton>
        </Tooltip>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
