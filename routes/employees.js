const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { getAll, addEmployee } = require('../controllers/employees');

//GET All employees
// api/employees
router.get('/', auth, getAll);

//GET  employer by id
// api/employees/:id
router.get('/:id', auth, () => console.log('get by id'));

//POST  add employer
// api/employees/add
router.post('/add', auth, addEmployee);

//PUT  edit employer
// api/employees/edit/:id
router.post('/edit/:id', auth, () => console.log('get by id'));

//POST  remove employer
// api/employees/remove/:id
router.post('/remove/:id', auth, () => console.log('get by id'));

module.exports = router;
