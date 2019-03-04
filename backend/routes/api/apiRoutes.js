const router = require('express').Router();
const userController = require('../../controllers/userController');
const accessoryController = require('../../controllers/accessoryController');

router.route('/userInfo/lifts').put(userController.saveUserLifts);

router.route('/userInfo/standard/:standard').put(userController.saveStandard);

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
