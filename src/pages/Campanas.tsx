import { useNavigate } from 'react-router-dom';

function Campanas() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="header">
        <img src="/logo.png" alt="Logo FEPASA" className="logo" />
      </header>
      
      <main className="main-content">
        <div className="page-header page-campanas">
          <button className="back-button" onClick={() => navigate('/')}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Volver
          </button>
          <h1>Campañas</h1>
        </div>
        
        <div className="content-section">
          <p>Contenido de las campañas de concientización...</p>
        </div>
      </main>
    </div>
  );
}

export default Campanas; 