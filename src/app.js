import express from 'express';
import mongoose from 'mongoose';
import employee from './routes/router.employee.js';
import project from './routes/router.project.js';
import dotenv from 'dotenv';
 
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(errorHandler);

// Routes
app.use('/api/employee', employee);
app.use('/api/project', project);


export default app;