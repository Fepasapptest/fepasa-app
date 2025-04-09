import React from 'react';
import { config } from '../config';
import '../App.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img 
        src={config.getAssetPath('logo.png')}
        alt="Logo FEPASA" 
        className="logo"
        style={{ 
          maxHeight: '60px',
          width: 'auto',
          display: 'block'
        }}
      />
    </header>
  );
};

export default Header; 