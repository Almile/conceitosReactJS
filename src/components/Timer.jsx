import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);// Estado para armazenar o tempo atual em segundos
  const [initialSeconds, setInitialSeconds] = useState(0);  // Estado para armazenar o valor inicial do tempo
  const [running, setRunning] = useState(false);// Estado para verificar se o timer está em execução (ativo ou pausado)

  // Função para o input de tempo (em segundos)
  const handleInputChange = (event) => {
    const newSeconds = parseInt(event.target.value, 10);
    if (isNaN(newSeconds)) {
      return;
    }
    // Atualiza osvalores
    setSeconds(newSeconds);
    setInitialSeconds(newSeconds); 
  };
  // useEffect para controlar o timer
  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        if (seconds > 0) {//se não acabou o tempo então decrementa o tempo 
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {// senão alerta e parar o timer
          alert("O tempo acabou!");
          setRunning(false);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [running, seconds]);
  // Executa o useEffect sempre que running ou seconds mudar

  //Função para alternar entre iniciar e pausar o timer
  const start = () => {
    setRunning(!running);
  };


  // Função para reiniciar o timer com o valor do input
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