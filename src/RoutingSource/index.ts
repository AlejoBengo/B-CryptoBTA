const { Router } = require('express');
const router = Router();

// Import routers below:
const UserRoutes = require('./User');
const LogRegRoutes = require('./Login&Register');
const AcademyRoutes = require('./Academy');
const ContractRoutes = require('./Contracts');
const InvestingDetail = require('./Investing');

//Config routers below:
router.use('/user', UserRoutes);
router.use('/logreg', LogRegRoutes);
router.use('/academy', AcademyRoutes);
router.use('/contract', ContractRoutes);
router.use('/investing', InvestingDetail);

export = router;
