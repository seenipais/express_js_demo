# 🚀 Express.js Sample Backend Project

## 📌 Overview
This repository contains a sample backend built using **Express.js** with a clean and scalable folder structure.  
It demonstrates best practices like separation of concerns using controllers, services, models, and routes, along with MongoDB integration using Mongoose.

---

## 📁 Project Structure
src/
controllers/ → API request handling
services/ → Business logic
models/ → Database schemas
routes/ → API routes
middleware/ → Custom middleware
config/ → DB connection & config
server.js → Entry point


---

## ⚙️ Features

- Clean and scalable folder structure
- REST API architecture
- MongoDB integration
- Soft delete implementation
- Separation of controller & service layers
- Middleware support
- Environment variable support

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- nodemon

---

## 📦 Installation

```bash
git clone  https://github.com/seenipais/express_js_demo.git
cd expressjs-app
npm install

Create a .env file in root directory:
PORT=3002
MONGO_URI=mongodb://127.0.0.1:27017/employeesDB

Architecture Flow

Client
  ↓
Routes
  ↓
Controllers
  ↓
Services
  ↓
Models
  ↓
MongoDB


Author
SEENIVASAN K
FULL STACK DEVELOPER

⭐ Purpose

This project is created for learning and demonstrating clean backend architecture using Express.js and MongoDB.