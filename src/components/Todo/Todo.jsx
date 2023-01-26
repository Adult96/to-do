import React, { useEffect, useState } from 'react';
import storage from '../../common/LocalStorage';
import { ListProvider } from '../../context/ListContext';
import AddItem from '../Footer/AddItem';
import TodoList from '../TodoList/TodoList';
import styles from './Todo.module.css';
import Navbar from '../Navbar/Navbar';

export default function Todo() {
  const [mode, setMode] = useState('dark');
  const modeCSS = mode === 'dark' ? styles.dark : styles.light;

  useEffect(() => {
    const storageMode = storage.get('mode');
    setMode(storageMode);
  }, []);

  const handleSetMode = () => {
    const modeOperator = mode === 'light' ? 'dark' : 'light';
    const storageMode = storage.saveAndReturn('mode', modeOperator);
    setMode(storageMode);
  };

  return (
    <div className={`${styles.list} ${modeCSS}`}>
      <ListProvider>
        <Navbar mode={mode} handleSetMode={handleSetMode} />
        <TodoList mode={mode} />
        <AddItem mode={mode} />
      </ListProvider>
    </div>
  );
}
