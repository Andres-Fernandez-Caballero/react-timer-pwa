import { useState, useEffect } from "react";

export const useTimer = () => {
    const ONE_CENT_SECONT = 10;
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
      if(!isRunning) return;
  
      const interval = setInterval(() => {
        setTime((time) => (time + 1) % 100);
      }, ONE_CENT_SECONT);
      return () => clearInterval(interval);


    },[isRunning, time]);
    
    const start = () => setIsRunning(true);
    const pause = () => setIsRunning(false);
    const reset = () => setTime(0);


    return {
        time,
        start,
        pause,
        reset,
        isRunning,
    }
}

export const getHours = (millisecons) => (
    Math.floor(millisecons / 3600)
)

export const getMinutes = (millisecons) => (
    Math.floor(millisecons / 60)
)

export const getSeconds = (millisecons) => (
    Math.floor(millisecons / 100)
)



