const express = require('express');
const router = express.Router();
const { getItems, createItem } = require('../controllers/itemController');
const validateBody = require('../middleware/validateBody');

router.get('/', getItems);

//  Middleware (validateBody) runs before createItem
router.post('/', validateBody, createItem);

module.exports = router;