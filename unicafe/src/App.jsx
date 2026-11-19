import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const positivePercentage = Number.isFinite(
    (good / (good + neutral + bad)) * 100,
  )
    ? (good / (good + neutral + bad)) * 100
    : 0;
  const average = Number.isFinite((good - bad) / (good + neutral + bad))
    ? (good - bad) / (good + neutral + bad)
    : 0;
  const total = Number.isFinite(good + neutral + bad)
    ? good + neutral + bad
    : 0;
  return (
    <div>
      <h2>Statistics</h2>

      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

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

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
