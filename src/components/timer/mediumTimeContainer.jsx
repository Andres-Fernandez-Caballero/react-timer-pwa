import styles from './timer.module.css'

import ItemTimeContainer from "./timeContainer";

const MediumTimeContainer = ({ time }) => (
    <span className={styles.medium}>
      <ItemTimeContainer itemTime={time} />
    </span>
  );
  

export default MediumTimeContainer;