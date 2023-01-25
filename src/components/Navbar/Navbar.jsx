import React from 'react';
import styles from './Navbar.module.css';
import { BsFillSunFill } from 'react-icons/bs';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <button className={styles.mode}>
        <BsFillSunFill />
      </button>
      <div className={styles.menu}>
        <button className={styles.allBtn}>All</button>
        <button className={styles.activeBtn}>Active</button>
        <button className={styles.completedBtn}>Completed</button>
      </div>
    </div>
  );
}
