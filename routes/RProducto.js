const express = require('express');
const CProducto = require('../controllers/CProducto');

const router = express.Router();

router.get('/', CProducto.listall)
      .post('/', CProducto.create)
      .get('/:key/:value', CProducto.find, CProducto.show)
      .put('/:key/:value', CProducto.find, CProducto.update)
      .delete('/:key/:value', CProducto.find, CProducto.deleted)

module.exports = router;