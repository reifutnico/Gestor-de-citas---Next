import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/pages/Home.js">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/quienes-somos">Quienes somos</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/reservas">Reservas</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contacto">Ayuda</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
