const { Router } = require('express');
const router = Router();

/*IMPORT CONTROLLERS*/
const PostNewInvestingDetail = require('../Controllers/InvestingDetail/postNewInvestingDetail');
const EditInvestingDetail = require('../Controllers/InvestingDetail/EditInvestingDetail');
const getInvestingDetail = require('../Controllers/InvestingDetail/getInvestingDetail');

/*ROUTES*/
router.post('/post', PostNewInvestingDetail);
router.put('/edit', EditInvestingDetail);
router.get('/get', getInvestingDetail);

export = router;
