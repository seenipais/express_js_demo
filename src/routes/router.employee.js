import express from 'express';
import {createEmployee, getEmployee, updateEmployee, deleteEmployee} from '../controllers/employee.controller.js'
import { validateEmployee } from '../middlewares/validateEmployee.js';
const router = express.Router();

router.post('/', validateEmployee, createEmployee);
router.get('/', validateEmployee, getEmployee);
router.put("/", validateEmployee, updateEmployee);
router.delete("/:id", validateEmployee, deleteEmployee)

export default router;