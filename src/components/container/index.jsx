import styles from "./container.module.css"
import { useTimer, getHours, getMinutes, getSeconds } from "../../hooks/timer";
import HugeTimeContainer from "../timer/hugeTimeContainer";
import LargeTimeContainer from "../timer/largeTimeContainer";
import MediumTimeContainer from "../timer/mediumTimeContainer";

const Container = () => {

  const {isRunning, pause, reset, start, time} = useTimer();
  const handleOnStart = () => start();
  const handleOnPause = () => pause();
  const handleOnReset = () => reset();

  return (
    <>
      <section
        className={styles.container}
      >
        <HugeTimeContainer time={getHours(time)} />
        <LargeTimeContainer time={getMinutes(time)} />
        <MediumTimeContainer time={time} />

      </section>
      <menu style={{ display: 'flex', gap:'3rem', justifyContent:'center' }}>
        <button onClick={handleOnStart}>Start</button>
        <button onClick={handleOnPause}>Stop</button>
        <button onClick={handleOnReset}>Reset</button>
      </menu>
    </>
  );
};

export default Container;
