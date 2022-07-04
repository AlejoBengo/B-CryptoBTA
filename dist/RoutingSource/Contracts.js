"use strict";
const { Router } = require('express');
const router = Router();
/*IMPORT CONTROLLERS*/
const createIC = require('../Controllers/Contract/createIC');
const createClassic = require('../Controllers/Contract/createClassic');
/*ROUTES*/
router.post('/ic', createIC);
router.post('/classic', createClassic);
module.exports = router;
