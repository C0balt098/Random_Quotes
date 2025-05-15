import quotes from "./data/quotes.js";

function generateRandomeInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}
function addUniqueIds(array) {
  array.forEach((item, index) => {
    generateRandomeId;
  });
}
function generateRandomeId() {
  return Math.floor(Math.random() * 0xffffffff)
    .toString(16)
    .padStart("8", 0);
}
const quotesWithIds = quotes.map((quote) => {
  return { ...quote, id: generateRandomeId() };
});
export { generateRandomeInt, addUniqueIds };
