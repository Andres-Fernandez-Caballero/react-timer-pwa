import styles from './timer.module.css'

import ItemTimeContainer from "./timeContainer";

const HugeTimeContainer = ({ time }) => (
    <span className={styles.huge}>
      <ItemTimeContainer itemTime={time} />
    </span>
  );
  

export default HugeTimeContainer;