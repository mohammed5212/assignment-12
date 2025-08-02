const validateBody = (req, res, next) => {
  const { name, quantity, price } = req.body || {}

  if (!name || quantity == null || price == null) {
    return res.status(400).json({
      error: 'All fields (name, quantity, price) are required'
    });
  }
  next()

};

module.exports = validateBody;