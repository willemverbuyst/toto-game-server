const express = require('express');
const authController = require('../controllers/authController');
const { userControllers } = require('../controllers');

const { updateUserProfileController } = userControllers;

const router = express.Router();

router.route('/login').post(authController.login);

router.route('/forgotPassword').post(authController.forgotPassword);

router.route('/resetPassword/:token').patch(authController.resetPassword);

router
  .route('/changePassword')
  .patch(authController.protect, authController.changePassword);

router.route('/me').get(authController.protect, authController.validToken);

router
  .route('/profile')
  .patch(authController.protect, updateUserProfileController);

module.exports = router;
