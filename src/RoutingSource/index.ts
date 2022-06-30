const { Router } = require('express');
const router = Router();

// Import routers below:
const UserRoutes = require('./User');
const LogRegRoutes = require('./Login&Register');
const AcademyRoutes = require('./Academy');

//Config routers below:
router.use('/user', UserRoutes);
router.use('/logreg', LogRegRoutes);
router.use('/academy', AcademyRoutes);

export = router;
