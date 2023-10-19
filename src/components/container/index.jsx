import styles from "./container.module.css"
import { useTimer } from "../../hooks/timer";
import HugeTimeContainer from "../timer/hugeTimeContainer";
import LargeTimeContainer from "../timer/largeTimeContainer";
import MediumTimeContainer from "../timer/mediumTimeContainer";

const Container = () => {

  const {pause, reset, start, getCentesimas, getSeconds, getMinutes} = useTimer();
  const handleOnStart = () => start();
  const handleOnPause = () => pause();
  const handleOnReset = () => reset();

  return (
    <div className={styles.container}>
      <section
        className={styles.clockDisplay}
      >
        <HugeTimeContainer time={getMinutes} /><span style={{ fontSize:'3rem' }}>:</span>
        <LargeTimeContainer time={getSeconds} /><span style={{ fontSize:'3rem' }}>:</span>
        <MediumTimeContainer time={getCentesimas} />

      </section>
      <menu className={styles.menu}>
        <button onClick={handleOnStart}>Start</button>
        <button onClick={handleOnPause}>Stop</button>
        <button onClick={handleOnReset}>Reset</button>
      </menu>
    </div>
  );
};

export default Container;
