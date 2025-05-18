function localStorageSetItem(key, value) {
  if (typeof key !== "string") {
    console.error("Error: Key must be a string");
    return;
  }
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error("Error setting item in localStorage", error);
  }
}
function localStorageGetItem(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}
function localStorageRemoveItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing item from the localStorage", error);
  }
}
function localStorageClearStorage() {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing item|s from the localStorage", error);
  }
}

export {
  localStorageSetItem,
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageClearStorage,
};
