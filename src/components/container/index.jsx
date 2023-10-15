import { useEffect } from "react";
import { useState } from "react";
import styles from "./container.module.css"

const Container = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if(!isRunning) return;

    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(interval);
  },[isRunning, time]);

  const handleOnStart = () => setIsRunning(true);
  const handleOnStop = () => setIsRunning(false);
  const handleOnReset = () => setTime(0);
  return (
    <main>
      <section
        className={styles.container}
      >
        <Hour time={time} />
        <Dot />
        <Minute time={time} />
        <Dot />
        <Second time={time} />
      </section>
      <menu style={{ display: 'flex', gap:'3rem', justifyContent:'center' }}>
        <button onClick={handleOnStart}>Start</button>
        <button onClick={handleOnStop}>Stop</button>
        <button onClick={handleOnReset}>Reset</button>
      </menu>
    </main>
  );
};

const Dot = () => (
  <div>
    <p className={styles.dot}>:</p>
  </div>
);

const ItemTimeContainer = ({ itemTime }) => (
  <span>{itemTime < 10 ? `0${itemTime}` : itemTime}</span>
);

const Hour = ({ time }) => (
  <span className={styles.hour}>
    <ItemTimeContainer itemTime={Math.floor(time / 3600)} />
  </span>
);

const Minute = ({ time }) => (
  <span className={styles.minutes}>
    <ItemTimeContainer itemTime={Math.floor((time % 3600) / 60)} />
  </span>
);

const Second = ({ time }) => (
  <span className={styles.seconds}>
    <ItemTimeContainer itemTime={time % 60} />
  </span>
);

export default Container;
