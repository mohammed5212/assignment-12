const { getAllItems, addItem } = require('../models/itemModel');

const getItems = (req, res) => {
  const items = getAllItems();
  res.status(200).json(items);
};

const createItem = (req, res) => {
  const { name, quantity, price } = req.body;

  const newItem = addItem({ name, quantity, price });
  res.status(201).json({
    message: 'Item created successfully',
    data: newItem
  });
};

module.exports = {
  getItems,
  createItem,
};