const router = require('express').Router();
const userController = require('../../controllers/userController');
const accessoryController = require('../../controllers/accessoryController');

router.route('/userInfo').put(userController.saveUserInfo);
// .get(userController.getUserInfo)

router.route('/accessory').post(accessoryController.createCustom);
module.exports = router;
