import React, { useEffect, useRef, useState } from 'react'
import './StopWatchComponent.css'
import watch from '../images/watch.png'

const StopWatchComponent = () => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        return clearInterval(timeHandler.current)
    },[])

    let timeHandler = useRef();

    function startStopwatch() {
        timeHandler.current = setInterval(() =>{
            setTime(prevTime => prevTime + 1)
        }, 1000)
    }
    function pauseStopwatch(){
        clearInterval(timeHandler.current)

    }
    function restartStopwatch(){
        setTime(0)
    }

  return (
    <div className='stopwatch'>
        <h2>StopWatch</h2>
        <img src={watch} alt='watch'></img>
        <h2>{time}</h2>

        <button className='start-btn' onClick={startStopwatch}>Start</button>
        <button className='stop-btn' onClick={pauseStopwatch}>Stop</button>
        <button className='restart-btn' onClick={restartStopwatch}>Restart</button>
    </div>
  )
}

export default StopWatchComponent