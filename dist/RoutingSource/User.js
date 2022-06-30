"use strict";
const { Router } = require('express');
const router = Router();
/*IMPORT CONTROLLERS*/
const PostNewUser = require('../Controllers/User/postNewUser');
const EditUser = require('../Controllers/User/EditUser');
/*ROUTES*/
router.post('/postuser', PostNewUser);
router.put('/edituser', EditUser);
module.exports = router;
