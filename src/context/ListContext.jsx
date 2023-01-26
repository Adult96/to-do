import React, { createContext, useEffect, useState } from 'react';
import storage from '../common/LocalStorage';

export const ListContext = createContext();

export function ListProvider({ children }) {
  const [menu, setMenu] = useState('All');
  const [list, setList] = useState([]);

  useEffect(() => {
    const storageList = storage.get('list');
    storageList && setList(storageList);
  }, []);

  useEffect(() => {
    const storageMenu = storage.get('menu');
    storageMenu && setMenu(storageMenu);
  }, []);

  const handleModifyList = list => {
    const storageList = storage.saveAndReturn('list', list);
    setList(storageList);
  };

  const handleModifyMenu = menu => {
    const storageMenu = storage.saveAndReturn('menu', menu);
    setMenu(storageMenu);
  };

  return (
    <ListContext.Provider
      value={{ list, menu, handleModifyList, handleModifyMenu }}
    >
      {children}
    </ListContext.Provider>
  );
}
