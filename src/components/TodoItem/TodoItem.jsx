import React from 'react';
import styles from './TodoItem.module.css';
import { AiFillDelete } from 'react-icons/ai';

export default function TodoItem({ mode, item, onCheck, onDelete }) {
  const setMode = mode === 'dark' ? styles.dark : styles.light;

  const handleCheck = e => {
    const checked = e.target.checked;
    const id = e.target.parentNode.parentNode.parentNode.id;
    onCheck(checked, id);
  };

  const handleDelete = e => {
    const id = e.target.parentNode.parentNode.parentNode.id;
    onDelete(id);
  };

  return (
    <li className={`${styles.item} ${setMode}`} id={item.id}>
      <div className={styles.todo}>
        <label className={styles.container}>
          <input
            type='checkbox'
            onClick={handleCheck}
            defaultChecked={item.checked}
          />
          <div className={styles.checkmark}></div>
        </label>
        {item.checked === true ? (
          <p className={`${styles.comment} ${styles.add}`}>{item.context}</p>
        ) : (
          <p className={styles.comment}>{item.context}</p>
        )}
      </div>
      <button className={styles.delete} onClick={handleDelete}>
        <AiFillDelete />
      </button>
    </li>
  );
}
