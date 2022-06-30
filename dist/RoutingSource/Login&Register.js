"use strict";
const { Router } = require('express');
const router = Router();
/*IMPORT CONTROLLERS*/
const dataChecker = require('../Controllers/Login&Register/dataChecker');
const changePassword = require('../Controllers/Login&Register/changePassword');
/*ROUTES*/
router.put('/login', dataChecker);
router.put('/change', changePassword);
module.exports = router;
