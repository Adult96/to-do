import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { ListContext } from '../../context/ListContext';

export default function Navbar({ mode, handleSetMode }) {
  const setMode = mode === 'dark' ? styles.dark : styles.light;
  const { handleModifyMenu } = useContext(ListContext);

  const handleClickMode = () => {
    handleSetMode();
  };
  const handleAll = () => {
    handleModifyMenu('All');
  };
  const handleActive = () => {
    handleModifyMenu('Active');
  };
  const handleCompleted = () => {
    handleModifyMenu('Completed');
  };

  return (
    <div className={`${styles.navbar} ${setMode}`}>
      <button className={styles.mode} onClick={handleClickMode}>
        {mode === 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
      </button>
      <div className={styles.menu}>
        <button className={styles.allBtn} onClick={handleAll}>
          All
        </button>
        <button className={styles.activeBtn} onClick={handleActive}>
          Active
        </button>
        <button className={styles.completedBtn} onClick={handleCompleted}>
          Completed
        </button>
      </div>
    </div>
  );
}
