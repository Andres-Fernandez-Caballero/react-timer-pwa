import { useState, useEffect, useCallback } from "react";


const getHours = (timer) => Math.floor(timer / 3600000);

const getMinutes = (timer) => Math.floor((timer / 60000) % 60);

const getSeconds = (timer) => Math.floor((timer / 1000) % 60 );

const getCentesimas = (timer) => Math.floor((timer % 1000) / 10);



export const useTimer = () => {
  const TIME_FACTOR = 10; //millisecons
  const INIT_TIMER_STATE = 0;

  const [startTime, setStartTime] = useState(null);
  const [timer, setTimer] = useState(INIT_TIMER_STATE);
  const [isRunning, setIsRunning] = useState(false);
  
  const startTimer = useCallback(() => {
    setStartTime(performance.now() - timer);
    setIsRunning(true);
  }, [timer])

  const stopTimer = useCallback( () => {
    if (isRunning){
      setTimer(performance.now() - startTime);
      setIsRunning(false);
    }
  }, [isRunning, startTime])

  const resetTimer = useCallback(() => {
    setStartTime(null);
    setTimer(INIT_TIMER_STATE);
    setIsRunning(false);
  }, [])


  const start = () => startTimer();
  const pause = () => stopTimer();
  const reset = () => resetTimer();

  useEffect( () => {
    let intervalId
    if( isRunning) {
      intervalId = setInterval(() => {
        setTimer(performance.now() - startTime);
      }, TIME_FACTOR);
    }else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, startTime])

  return {
    getHours: getHours(timer),
    getMinutes: getMinutes(timer),
    getSeconds: getSeconds(timer),
    getCentesimas: getCentesimas(timer),
    start,
    pause,
    reset,
    isRunning,
  };
};

