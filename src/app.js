import express from 'express';
import mongoose from 'mongoose';
import employee from './routes/router.employee.js';
import project from './routes/router.project.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use('/api/employee', employee);
app.use('/api/project', project);


export default app;