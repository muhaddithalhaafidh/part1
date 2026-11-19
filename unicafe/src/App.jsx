import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Unicafe</h1>

      <h2>Give feedback</h2>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <div>
        <h2>Statistics</h2>

        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>
          All:{' '}
          {Number.isFinite(good + neutral + bad) ? good + neutral + bad : 0}
        </p>
        <p>
          Average:{' '}
          {Number.isFinite((good - bad) / (good + neutral + bad))
            ? (good - bad) / (good + neutral + bad)
            : 0}
        </p>
        <p>
          Positive:{' '}
          {Number.isFinite((good / (good + neutral + bad)) * 100)
            ? (good / (good + neutral + bad)) * 100
            : 0}
          %
        </p>
      </div>
    </div>
  );
};

export default App;
