import React, { useContext, useState } from 'react';
import { ListContext } from '../../context/ListContext';
import styles from './AddItem.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function AddItem({ mode }) {
  const setMode = mode === 'dark' ? styles.dark : styles.light;
  const [input, setInput] = useState('');
  const { list, handleModifyList } = useContext(ListContext);
  const handleSumit = e => {
    e.preventDefault();

    input.trim() &&
      handleModifyList([
        ...list,
        {
          id: uuidv4(),
          context: input,
        },
      ]);
    setInput('');
  };

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  return (
    <form className={`${styles.AddItem} ${setMode}`} onSubmit={handleSumit}>
      <input
        type='text'
        className={styles.input}
        name='input'
        value={input}
        placeholder='Add Item'
        autoComplete='off'
        autoFocus
        onChange={handleInputChange}
      />
      <input className={styles.addBtn} value='Add' type='submit' />
    </form>
  );
}
