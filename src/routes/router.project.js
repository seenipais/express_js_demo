import express from 'express';
import {createProject, getProject, updateProject, deleteProject} from '../controllers/project.controller.js'
import { validateProject } from '../middlewares/validateProject.js';

const router = express.Router();

router.post('/', validateProject, createProject);
router.get('/', validateProject, getProject);
router.get('/:code', validateProject, getProject);
router.put("/", validateProject, updateProject);
router.delete("/",validateProject, deleteProject)

export default router;