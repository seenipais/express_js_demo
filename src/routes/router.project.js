import express from 'express';
import {createProject, getProject, updateProject, deleteProject} from '../controllers/project.controller.js'
import Project from '../models/projectDTO.js';

const router = express.Router();

router.post('/', createProject);
router.get('/', getProject);
router.get('/:code',getProject);
router.put("/", updateProject);
router.delete("/", deleteProject)

export default router;