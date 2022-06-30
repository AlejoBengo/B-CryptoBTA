const { Router } = require('express');
const router = Router();

/*IMPORT CONTROLLERS*/
const PostNewSubscriptor = require('../Controllers/Academy/postNewUser');

/*ROUTES*/
router.post('/', PostNewSubscriptor);

export = router;
