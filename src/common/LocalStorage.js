const storage = {
  set(key, data) {
    const dataToJSON = JSON.stringify(data);
    window.localStorage.setItem(key, dataToJSON);
  },

  get(key) {
    const dataTypeJSON = window.localStorage.getItem(key);
    return JSON.parse(dataTypeJSON);
  },

  remove(key) {
    window.localStorage.removeItem(key);
  },

  saveAndReturn(key, data) {
    this.remove(key);
    this.set(key, data);
    const storageData = this.get(key);

    return storageData;
  },
};

export default storage;
