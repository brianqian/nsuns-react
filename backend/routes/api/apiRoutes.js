const router = require('express').Router();
const userController = require('../../controllers/userController');
const accessoryController = require('../../controllers/accessoryController');

router.route('/userInfo').put(userController.saveUserInfo);
// .get(userController.getUserInfo)

router
  .route('/accessory/:userId')
  .get(accessoryController.getAccessoryPlan)
  .put(accessoryController.editAccessory)
  .post(accessoryController.addAccessory);

router
  .route('/accessory')
  .post(accessoryController.createAccessoryPlan)
  .delete(accessoryController.deleteAccessory);
module.exports = router;
