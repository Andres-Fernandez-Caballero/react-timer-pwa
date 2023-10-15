import styles from './nabar.module.css'

const Navbar = () => (
  <nav className={styles.container}>
    <header className={styles.header}>
    <h2 className={styles.headerTitle}>
      ElectricTimer
    </h2>
    <p className={styles.headerlogo}>⌛</p>
    </header>
    
    <menu>
        <a href="http://github">Github</a>
    </menu>
  </nav>
);
export default Navbar;
