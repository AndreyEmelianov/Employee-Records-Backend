const express = require('express');
const router = require('router');
const { auth } = require('../middleware/auth');

//GET All employees
// api/employees
router.get('/', auth);

//GET  employer by id
// api/employees/:id
router.get('/:id', auth);

//POST  add employer
// api/employees/add
router.post('/add', auth);

//PUT  edit employer
// api/employees/edit/:id
router.post('/edit/:id', auth);

//POST  remove employer
// api/employees/remove/:id
router.post('/remove/:id', auth);
