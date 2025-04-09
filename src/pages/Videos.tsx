import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../App.css';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoFile: string;
  category: string;
}

const videosData: Video[] = [
  {
    id: '1',
    title: 'Uso de respirador miniSCAPE',
    description: 'Instructivo del método de uso correcto del respirador miniSCAPE',
    thumbnail: '/fepasa-app/videos/thumbnails/instructivo-uso-miniscape.png',
    videoFile: '/fepasa-app/videos/instructivo-uso-miniscape.mp4',
    category: 'Procedimientos'
  }
  // Puedes agregar más videos aquí cuando tengas las miniaturas y videos correspondientes
];

const categories = ['Todos', 'Procedimientos', 'Equipamiento', 'Materiales'];

function Videos() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedVideo, setSelectedVideo] = React.useState<Video | null>(null);

  const filteredVideos = videosData.filter(video => {
    const matchesCategory = selectedCategory === 'Todos' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="page-header page-videos">
          <button className="back-button" onClick={() => navigate('/')}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Volver
          </button>
          <h1>Videos de Seguridad</h1>
        </div>
        <div className="content-section">
          <div className="videos-controls">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Buscar videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="videos-grid">
            {filteredVideos.map(video => (
              <div 
                key={video.id} 
                className="video-card"
                onClick={() => handleVideoClick(video)}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-button">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                  <span className="video-category">{video.category}</span>
                </div>
              </div>
            ))}
          </div>

          {selectedVideo && (
            <div className="video-modal">
              <div className="video-modal-content">
                <button className="close-button" onClick={handleCloseVideo}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
                <video controls>
                  <source src={selectedVideo.videoFile} type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos.
                </video>
                <h2>{selectedVideo.title}</h2>
                <p>{selectedVideo.description}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Videos; 