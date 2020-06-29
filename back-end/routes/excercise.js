const router = require('express').Router();
let excerciseController = require('../controllers/excercise.controller');

router.route('/').get(excerciseController.getAll);

router.route('/:id').get(excerciseController.findByID);

router.route('/delete/:id').delete(excerciseController.delete);

router.route('/add').post(excerciseController.create);

router.route('/update/:id').put(excerciseController.update);

module.exports = router;