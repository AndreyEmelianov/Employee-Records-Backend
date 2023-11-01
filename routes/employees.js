const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const {
  getAll,
  addEmployee,
  getEmployeeById,
  editEmployee,
  removeEmployee,
} = require('../controllers/employees');

//GET All employees
// api/employees
router.get('/', auth, getAll);

//GET  employer by id
// api/employees/:id
router.get('/:id', auth, getEmployeeById);

//POST  add employer
// api/employees/add
router.post('/add', auth, addEmployee);

//PUT  edit employer
// api/employees/edit/:id
router.put('/edit/:id', auth, editEmployee);

//POST  remove employer
// api/employees/remove/:id
router.post('/remove/:id', auth, removeEmployee);

module.exports = router;
