const router = require('express').Router();
const userController = require('../controllers/userController');

router.route('/lifts').put(userController.saveUserLifts);
router.route('/standard/:standard').put(userController.saveStandard);
router.route('/timer').put(userController.saveTimerOption);
router.route('/weightbox').put(userController.saveWeightBoxOption);
router.route('/variation').put(userController.saveVariation);
router.route('/:userId').get(userController.getUserSettings);
router.route('/accessories/seed').post(userController.seedSettings);
module.exports = router;
