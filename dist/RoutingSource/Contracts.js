"use strict";
const { Router } = require('express');
const router = Router();
/*IMPORT CONTROLLERS*/
const createIC = require('../Controllers/Contract/createIC');
const createClassic = require('../Controllers/Contract/createClassic');
const getSummaryOfAllInversions = require('../Controllers/Contract/getSummaryOfAllInversions');
/*ROUTES*/
router.post('/ic', createIC);
router.post('/classic', createClassic);
router.get('/allinversions', getSummaryOfAllInversions);
module.exports = router;
