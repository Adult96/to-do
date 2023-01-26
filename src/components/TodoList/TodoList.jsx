import React, { useContext } from 'react';
import styles from './TodoList.module.css';
import { ListContext } from '../../context/ListContext';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({ mode }) {
  const setMode = mode === 'dark' ? styles.dark : styles.light;
  const { list, menu, handleModifyList } = useContext(ListContext);

  const handleCheck = (checked, id) => {
    handleModifyList(
      list.map(item => {
        if (item.id === id) {
          return { ...item, checked };
        }

        return item;
      })
    );
  };

  const handleDelete = id => {
    handleModifyList(list.filter(item => item.id !== id));
  };

  const filtered = getFilteredMenu(menu, list);

  return (
    <div className={`${styles.todoList} ${setMode}`}>
      <ul className={styles.list}>
        {filtered.map(item => (
          <TodoItem
            key={item.id}
            mode={mode}
            item={item}
            onCheck={handleCheck}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

function getFilteredMenu(menu, list) {
  if (menu === 'All') {
    return list;
  }
  if (menu === 'Active') {
    return list.filter(item => item.checked !== true);
  }

  return list.filter(item => item.checked === true);
}
