//Importa hook useState do React
import { useEffect, useState } from "react";

function Temporizer(){
    const [seconds, setSeconds] = useState(0)
    const [running, setRunning] = useState(true)

    //useEffect é usado para atualizar o estado dos segundos a cada 1 segundo acrescentando +1 somente se o temporizador estiver rodando(running)
    useEffect(() => {
        let interval
        if(running){
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1)
            },1000)
        }
        return() => clearInterval(interval)
    },[running])

    // Para o tempo colocando running como falso
    const pause = () => {
        setRunning(!running)
    }

    //Zera o temporizador e roda direto
    const restart = () => {
        setRunning(true)
        setSeconds(0)
    }

    // Retorna os elementos
    return (
        <div className='content'>
            <ul>
            <h2>Seconds: {seconds}</h2>
            {/* Botão para pausar ou continuar o cronômetro quando clicado alternadamente*/}
            <button onClick={pause}>{running ? "Pause" : "Continue"}</button>
            <button onClick={restart}>Restart</button>
            </ul>
        </div>
    )
}
//exporta a function Temporizer para que possa ser importada em outros arquivos
export default Temporizer