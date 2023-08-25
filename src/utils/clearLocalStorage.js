export const clearLocalStorage = keysArray => {
  keysArray.forEach(el => {
    localStorage.setItem(el, '');
  });
};
