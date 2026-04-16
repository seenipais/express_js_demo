import express from 'express';
import {createEmployee, getEmployee, updateEmployee, deleteEmployee} from '../controllers/employee.controller.js'

const router = express.Router();

router.post('/', createEmployee);
router.get('/', getEmployee);
router.put("/", updateEmployee);
router.delete("/:id", deleteEmployee)

export default router;