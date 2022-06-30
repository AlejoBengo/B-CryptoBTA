"use strict";
const { Router } = require('express');
const router = Router();
// Import routers below:
const UserRoutes = require('./User');
const LogRegRoutes = require('./Login&Register');
const AcademyRoutes = require('./Academy');
const ContractRoutes = require('./Contracts');
//Config routers below:
router.use('/user', UserRoutes);
router.use('/logreg', LogRegRoutes);
router.use('/academy', AcademyRoutes);
router.use('/contract', ContractRoutes);
module.exports = router;
