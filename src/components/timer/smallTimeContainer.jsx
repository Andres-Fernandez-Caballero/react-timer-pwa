import styles from './timer.module.css'

import ItemTimeContainer from "./timeContainer";

const SmallTimeContainer = ({ time }) => (
    <span className={styles.medium}>
      <ItemTimeContainer itemTime={time} />
    </span>
  );
  

export default SmallTimeContainer;