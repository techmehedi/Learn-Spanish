import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [words, setWords] = useState([
    {
      front: 'perro',
      back: 'dog'  
    },
    {
      front: 'gato',  
      back: 'cat'
    },
    {
      front: 'vaca',
      back: 'cow' 
    },
    {
      front: 'caballo',  
      back: 'horse'
    },
    {
      front: 'oveja',
      back: 'sheep'
    },
    {
      front: 'cerdo',
      back: 'pig'
    },
    {
      front: 'pollo',
      back: 'chicken'
    }, 
    {
      front: 'vaca',
      back: 'cow'
    },
    {
      front: 'pato',
      back: 'duck'
    },
    {
      front: 'conejo',
      back: 'rabbit'
    }
  ]);

  const [randomWord, setRandomWord] = useState(words[0]);

  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    shuffleWords();
  }, []);

  const handleCardClick = () => {
    setFlipped(!flipped);
  }

  function shuffleWords() {
    setRandomWord(words[Math.floor(Math.random() * words.length)]);
  }

  return (
    <div>
      <div className="heading">
        <h1>Learn Spanish</h1>
        <h2>How good at Spanish are you? Test all of your Spanish knowledge here!</h2>
      </div>

      <div 
        className={`card ${flipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
      >
        <div className="front">{randomWord.front}</div>

        <div className="back">{randomWord.back}</div>
      </div>
      <div className="btndiv">

      <button className='btn' onClick={shuffleWords}>Next</button>
      </div>
    </div>
  );
}

export default App;
