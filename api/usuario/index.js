const { Router } = require('express');
const controller = require('./usuario.controller');

const router = new Router();

router.get('/', controller.index);
router.get('/:id', controller.userID);
router.post('/', controller.create);

module.exports = router;
