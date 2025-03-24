var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/user.controller')



router.get('/', userCtrl.listAll );
router.get('/view/:id', userCtrl.getOne );
router.all('/add', userCtrl.add);
router.all('/edit/:id', userCtrl.edit);



module.exports = router;
