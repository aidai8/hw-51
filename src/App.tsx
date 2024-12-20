import './App.css'
import React, { useState } from 'react';
import Ball from './components/Ball/Ball.tsx';

const App: React.FC = () => {
  const initialNumbers = [5, 11, 16, 23, 32];
  const [numbers, setNumbers] = useState<number[]>(initialNumbers);

  const generateNumbers = () => {
    const newNumbers = Array.from(new Set<number>(
        Array.from({ length: 36 }, (_, i) => i + 5)
            .sort(() => Math.random() - 0.5)
            .slice(0, 5)
    )).sort((a, b) => a - b);

    setNumbers(newNumbers);
  };

  return (
      <div className="container">
        <h1>Lottery!!</h1>
        <div>
          {numbers.map((num) => (
              <Ball key={num} number={num} />
          ))}
        </div>
        <button onClick={generateNumbers}>New numbers</button>
      </div>
  );
};

export default App;