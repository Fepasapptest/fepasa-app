import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="cards-grid">
          <div className="card purple" onClick={() => navigate('/cuestionario')}>
            <div className="card-content">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                </svg>
              </div>
              <h2>Cuestionario</h2>
              <p>Evalúa tus conocimientos sobre seguridad</p>
            </div>
            <button className="btn-purple">Comenzar</button>
          </div>

          <div className="card orange" onClick={() => navigate('/campanas')}>
            <div className="card-content">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
                </svg>
              </div>
              <h2>Campañas</h2>
              <p>Campañas de seguridad activas</p>
            </div>
            <button className="btn-orange">Ver Campañas</button>
          </div>

          <div className="card green" onClick={() => navigate('/procedimientos')}>
            <div className="card-content">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <h2>Procedimientos</h2>
              <p>Procedimientos de seguridad</p>
            </div>
            <button className="btn-green">Ver Procedimientos</button>
          </div>

          <div className="card red" onClick={() => navigate('/videos')}>
            <div className="card-content">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
                </svg>
              </div>
              <h2>Videos</h2>
              <p>Videos instructivos de seguridad</p>
            </div>
            <button className="btn-red">Ver Videos</button>
          </div>

          <div className="card yellow" onClick={() => navigate('/noticias')}>
            <div className="card-content">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </div>
              <h2>Noticias</h2>
              <p>Últimas noticias de seguridad</p>
            </div>
            <button className="btn-yellow">Ver Noticias</button>
          </div>

          <div className="card green" onClick={() => navigate('/iper-game')}>
            <div className="card-content">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 6h-3V3h-2v3h-3v2h3v3h2V8h3zm-9 6c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM4 22v-2c0-1.71 2.85-3.18 6-3.18.18 0 .36 0 .53.01L12 19l1-1c0-.34.02-.67.05-1H12c-3.15 0-6 1.47-6 3.18v.82h8.14c-.05-.33-.14-.66-.14-1zm13 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"/>
                </svg>
              </div>
              <h2>Juego IPER</h2>
              <p>Aprende sobre identificación de peligros y evaluación de riesgos</p>
            </div>
            <button className="btn-green">Jugar</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home; 