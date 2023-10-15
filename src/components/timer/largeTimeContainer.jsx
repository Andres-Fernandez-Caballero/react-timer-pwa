import styles from './timer.module.css'

import ItemTimeContainer from "./timeContainer";

const LargeTimeContainer = ({ time }) => (
    <span className={styles.large}>
      <ItemTimeContainer itemTime={time} />
    </span>
  );
  

export default LargeTimeContainer;