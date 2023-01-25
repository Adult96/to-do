import React from 'react';
import styles from './List.module.css';
import Navbar from './Navbar/Navbar';

export default function List() {
  return (
    <div className={styles.list}>
      <Navbar />
    </div>
  );
}
