export const clearLocalStorage = keysArray => {
  keysArray.map(el => {
    localStorage.setItem(el, '');
  });
};
