import React, { useState, useEffect } from 'react';
import './Spinner.css';

function App() {
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerRunning(false);
    }, 5000); // set the timer for 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {timerRunning ? <div className="spinner" /> : <p>Timer finished!</p>}
    </div>
  );
}

export default App;
