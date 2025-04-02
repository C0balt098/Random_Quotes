function generateRandomeInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}
function addUniqueIds(array) {
  array.forEach((item, index) => {
    item.id = index + 1;
  });
}

export { generateRandomeInt, addUniqueIds };
