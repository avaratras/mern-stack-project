const router = require('express').Router();
let userController = require('../controllers/user.controller');

//Get all user
router.route('/').get(userController.getAll);

router.route('/:id').get(userController.findByID);

//Create an user
router.route('/add').post(userController.create);

//Update an user
router.route('/update/:id').put(userController.update);

//delete an user
router.route('/delete/:id').delete(userController.delete);

//delete all user

module.exports = router;