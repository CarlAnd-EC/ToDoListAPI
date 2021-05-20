/*----------------------------------------------------------
* Name: todoR.js (routes)
* Alias: Routes addressing
* Author: Carlos Andrés Escalona Contreras 
* Proposed by: Javier Solís
* Created: 06/05/2021       Updated: 14/05/2021
* Description:
 ----------------------------------------------------------*/

const express = require('express');
const router = express.Router();

const path = require('path');
const controllerTodo = require('../controllers/todoC');

router.get('/',controllerTodo.searchAll);
router.get('/:title',controllerTodo.search);
router.post('/',controllerTodo.add);
router.put('/:id',controllerTodo.update);
router.delete('/:id',controllerTodo.delete);
module.exports = router;