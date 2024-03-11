const express = require('express');
const router = express.Router();
const EmployeeControllers = require('../controllers/EmployeeControllers');

router.get('/', EmployeeControllers.getAllEmployees);
router.post('/', EmployeeControllers.addEmployee);
router.get('/:id', EmployeeControllers.getEmployeeById);
router.delete('/:id', EmployeeControllers.deleteEmployee);
router.put('/:id', EmployeeControllers.updateEmployee);

module.exports = router;