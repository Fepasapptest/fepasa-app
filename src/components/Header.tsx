import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img 
        src="/logo.png" 
        alt="Logo FEPASA" 
        className="logo"
        style={{ maxHeight: '60px' }}
      />
    </header>
  );
};

export default Header; 