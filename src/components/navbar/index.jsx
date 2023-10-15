import styles from './nabar.module.css'

const Navbar = () => (
  <div className={styles.container}>
    <header className={styles.header}>
    <h2 className={styles.headerTitle}>
      ElectricTimer
    </h2>
    <p className={styles.headerlogo}>⌛</p>
    </header>
    
    <menu>
        <a href="http://github">Github</a>
    </menu>
  </div>
);
export default Navbar;
