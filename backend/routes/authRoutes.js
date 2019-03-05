const router = require('express').Router();
const authController = require('../controllers/authController');

router.route('/login').post(authController.login);
router.route('/jwtLogin').post(authController.jwtLogin);
router.route('/signUp').post(authController.signUp);

module.exports = router;
