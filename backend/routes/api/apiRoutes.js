const router = require('express').Router();
const userController = require('../../controllers/userController');

router
  .route('/userInfo')
  .get(userController.getUserInfo)
  .put(userController.saveUserInfo);

module.exports = router;
