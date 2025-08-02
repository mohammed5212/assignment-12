const items = require('../data/data');

const getAllItems = () => items;

const addItem = (item) => {
  const newItem = { id: items.length + 1, ...item };
  items.push(newItem);
  return newItem;
};

module.exports = {
  getAllItems,
  addItem,
};