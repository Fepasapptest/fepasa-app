import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdWarning, MdAssessment, MdSecurity } from 'react-icons/md';
import '../App.css';

interface Player {
  name: string;
  position: string;
  workplace: string;
}

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

const workplaces = [
  'Alameda',
  'Barrancas',
  'Chagres',
  'Coronel',
  'ETEO',
  'Horcones',
  'Las Blancas',
  'Llay Llay',
  'Los Andes',
  'Mariquina',
  'Nueva Aldea',
  'San Javier',
  'Talcahuano',
  'Temuco',
  'Ventanas'
];

// Preguntas por categoría
const questions: Question[] = [
  {
    id: 1,
    category: 'Identificación de Peligros',
    question: '¿Cuál de los siguientes es un peligro físico en el ambiente de trabajo?',
    options: [
      'Ruido excesivo de maquinaria',
      'Virus y bacterias',
      'Estrés laboral',
      'Productos químicos'
    ],
    correctAnswer: 'Ruido excesivo de maquinaria'
  },
  {
    id: 2,
    category: 'Identificación de Peligros',
    question: '¿Qué tipo de peligro representa la manipulación de sustancias corrosivas?',
    options: [
      'Peligro Físico',
      'Peligro Químico',
      'Peligro Biológico',
      'Peligro Psicosocial'
    ],
    correctAnswer: 'Peligro Químico'
  },
  {
    id: 3,
    category: 'Evaluación de Riesgos',
    question: '¿Qué factores se consideran al evaluar la probabilidad de un riesgo?',
    options: [
      'Solo el número de trabajadores expuestos',
      'Solo el tiempo de exposición',
      'Frecuencia de exposición, número de trabajadores y procedimientos existentes',
      'Únicamente la existencia de procedimientos'
    ],
    correctAnswer: 'Frecuencia de exposición, número de trabajadores y procedimientos existentes'
  },
  {
    id: 4,
    category: 'Medidas de Control',
    question: '¿Cuál es la primera medida de control que se debe considerar según la jerarquía de controles?',
    options: [
      'Usar EPP',
      'Implementar controles administrativos',
      'Eliminar el peligro',
      'Sustituir el peligro'
    ],
    correctAnswer: 'Eliminar el peligro'
  }
];

// Categorías disponibles
const categories = [...new Set(questions.map(q => q.category))];

function IPERGame() {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<'register' | 'playing' | 'finished'>('register');
  const [player, setPlayer] = useState<Player>({ name: '', position: '', workplace: '' });
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (player.name && player.workplace) {
      setGameState('playing');
    }
  };

  const handleCardClick = (category: string) => {
    const availableQuestions = questions.filter(
      q => q.category === category && !answeredQuestions.includes(q.id)
    );
    
    if (availableQuestions.length > 0) {
      const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
      setCurrentQuestion(randomQuestion);
    }
  };

  const handleAnswer = (answer: string) => {
    if (currentQuestion) {
      const correct = answer === currentQuestion.correctAnswer;
      setIsCorrect(correct);
      if (correct) {
        setScore(prev => prev + 10);
      }
      setShowFeedback(true);
      setAnsweredQuestions(prev => [...prev, currentQuestion.id]);

      // Cerrar el feedback después de 2 segundos
      setTimeout(() => {
        setShowFeedback(false);
        setCurrentQuestion(null);
        
        // Verificar si el juego ha terminado
        if (answeredQuestions.length + 1 === questions.length) {
          setGameState('finished');
        }
      }, 2000);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Identificación de Peligros':
        return <MdWarning className="category-icon" />;
      case 'Evaluación de Riesgos':
        return <MdAssessment className="category-icon" />;
      case 'Medidas de Control':
        return <MdSecurity className="category-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <img src="/logo.png" alt="Logo FEPASA" className="logo" />
      </header>
      
      <main className="main-content">
        <div className="page-header">
          <button className="back-button" onClick={() => navigate('/')}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Volver
          </button>
          <h1>Juego IPER</h1>
        </div>

        <div className="content-section game-content">
          {gameState === 'register' && (
            <form onSubmit={handleRegister} className="register-form">
              <h2>Registro de Jugador</h2>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  value={player.name}
                  onChange={(e) => setPlayer({...player, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="position">Cargo:</label>
                <input
                  type="text"
                  id="position"
                  value={player.position}
                  onChange={(e) => setPlayer({...player, position: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="workplace">Centro de Trabajo:</label>
                <select
                  id="workplace"
                  value={player.workplace}
                  onChange={(e) => setPlayer({...player, workplace: e.target.value})}
                  required
                >
                  <option value="">Selecciona un centro</option>
                  {workplaces.map(workplace => (
                    <option key={workplace} value={workplace}>
                      {workplace}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="start-button">
                Comenzar Juego
              </button>
            </form>
          )}

          {gameState === 'playing' && (
            <div className="game-board">
              <div className="game-info">
                <p className="player-info">Jugador: {player.name}</p>
                <p className="score">Puntaje: {score}</p>
              </div>

              {!currentQuestion ? (
                <div className="categories-grid">
                  {categories.map(category => {
                    const availableQuestions = questions.filter(
                      q => q.category === category && !answeredQuestions.includes(q.id)
                    ).length;
                    
                    return (
                      <div
                        key={category}
                        className="category-card"
                        onClick={() => handleCardClick(category)}
                      >
                        {getCategoryIcon(category)}
                        <h3>{category}</h3>
                        <p>{availableQuestions} preguntas disponibles</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="question-card">
                  <h3>{currentQuestion.category}</h3>
                  <p className="question-text">{currentQuestion.question}</p>
                  <div className="options-grid">
                    {currentQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        className="option-button"
                        onClick={() => handleAnswer(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {showFeedback && (
                <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                  {isCorrect ? '¡Correcto! +10 puntos' : 'Incorrecto'}
                </div>
              )}
            </div>
          )}

          {gameState === 'finished' && (
            <div className="game-finished">
              <h2>¡Juego Terminado!</h2>
              <div className="final-score">
                Puntaje Final: {score}
              </div>
              <button 
                className="play-again-button"
                onClick={() => {
                  setGameState('register');
                  setScore(0);
                  setAnsweredQuestions([]);
                  setPlayer({ name: '', position: '', workplace: '' });
                }}
              >
                Jugar de Nuevo
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default IPERGame; 