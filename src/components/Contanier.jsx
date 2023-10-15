import { useEffect } from "react";
import { useState } from "react";

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
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
        }}
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
    <p style={{ fontSize: "8em", fontWeight: "bolder" }}>:</p>
  </div>
);

const ItemTimeContainer = ({ itemTime }) => (
  <span>{itemTime < 10 ? `0${itemTime}` : itemTime}</span>
);

const Hour = ({ time }) => (
  <span style={{ fontSize: "15em" }}>
    <ItemTimeContainer itemTime={Math.floor(time / 3600)} />
  </span>
);

const Minute = ({ time }) => (
  <span style={{ fontSize: "9em" }}>
    <ItemTimeContainer itemTime={Math.floor((time % 3600) / 60)} />
  </span>
);

const Second = ({ time }) => (
  <span style={{ fontSize: "6em", fontWeight: "normal" }}>
    <ItemTimeContainer itemTime={time % 60} />
  </span>
);

export default Container;
