const { Router } = require('express');
const router = Router();

/*IMPORT CONTROLLERS*/
const CreateContract = require('../Controllers/Contract/createContract');

/*ROUTES*/
router.post('/', CreateContract);

export = router;
