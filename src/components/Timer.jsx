import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [initialSeconds, setInitialSeconds] = useState(0); 
  const [running, setRunning] = useState(false);

  const handleInputChange = (event) => {
    const newSeconds = parseInt(event.target.value, 10);
    if (isNaN(newSeconds)) {
      return;
    }
    setSeconds(newSeconds);
    setInitialSeconds(newSeconds); 
  };

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          alert("O tempo acabou!");
          setRunning(false);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [running, seconds]);

  const start = () => {
    setRunning(!running);
  };

  const restart = () => {
    setSeconds(initialSeconds);
    setRunning(true);
  };

  return (
    <div className='content'>
      <ul>
      <input
        type="number"
        placeholder="Section time"
        onChange={handleInputChange}
      />
      <h2>{seconds}<sub>sec</sub></h2>
      <button onClick={start}>{running ? "Pause" : "Start"}</button>
      <button onClick={restart}>Restart</button>
      </ul>
    </div>
  );
}

export default Timer;