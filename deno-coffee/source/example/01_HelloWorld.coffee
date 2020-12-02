capitalize = (word) =>
  word
  .charAt 0
  .toUpperCase() +
  word.slice 1

hello = (name) =>
  "Hello " +
  capitalize name

console.log hello "john"
console.log hello "Sarah"
console.log hello "kai"
