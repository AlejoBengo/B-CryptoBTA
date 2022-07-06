const { Router } = require('express');
const router = Router();

/*IMPORT CONTROLLERS*/
const PostNewInvestingDetail = require('../Controllers/Investing/postNewInvestingDetail');
const EditInvestingDetail = require('../Controllers/Investing/EditInvestingDetail');
const getInvestingDetail = require('../Controllers/Investing/getInvestingDetail');
const getActiveInvestingOptions = require('../Controllers/Investing/getActiveInvestingOption');

/*ROUTES*/
router.post('/newoption', PostNewInvestingDetail);
router.put('/editoption', EditInvestingDetail);
router.get('/all', getInvestingDetail);
router.get('/allactive', getActiveInvestingOptions);

export = router;
