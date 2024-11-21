import { useEffect, useState } from "react";

function Temporizer(){
    const [seconds, setSeconds] = useState(0)
    const [running, setRunning] = useState(true)

    useEffect(() => {
        let interval
        if(running){
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1)
            },1000)
        }
        return() => clearInterval(interval)
    },[running])

    const pause = () => {
        setRunning(!running)
    }

    const restart = () => {
        setRunning(true)
        setSeconds(0)
    }

    return (
        <div className='content'>
            <ul>
            <h2>Seconds: {seconds}</h2>
            <button onClick={pause}>{running ? "Pause" : "Continue"}</button>
            <button onClick={restart}>Restart</button>
            </ul>
        </div>
    )
}

export default Temporizer