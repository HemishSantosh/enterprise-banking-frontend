# 🏦 Enterprise Banking System - Frontend

A modern and responsive banking web application built using **React**, **TypeScript**, **Material UI**, and **Vite**. This application provides a secure and user-friendly interface for customers and administrators to manage banking operations.

---

## 🌐 Live Demo

**Frontend:** https://enterprise-banking-frontend.vercel.app/

**Backend API:** https://YOUR-BACKEND-URL.onrender.com

---

## 📌 Project Description

The Enterprise Banking System is a full-stack banking application designed to simulate real-world banking operations. The frontend communicates with a secure Spring Boot REST API using JWT authentication and provides a responsive dashboard for managing accounts, transactions, and user information.

The application follows a component-based architecture, ensuring scalability, maintainability, and code reusability.

---

## ✨ Features

- 🔐 User Registration & Login
- 🔑 JWT Authentication
- 👤 Customer Dashboard
- 💳 Account Details
- 💸 Money Transfer
- 📜 Transaction History
- 📊 Dashboard Analytics
- 👨‍💼 Admin Dashboard
- 📱 Fully Responsive UI
- 🚪 Protected Routes
- ⚡ Fast Loading using Vite

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| React 19 | Frontend Framework |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Material UI | UI Components |
| Axios | API Communication |
| React Router | Navigation |
| CSS | Styling |

---

# 🏗️ Project Architecture

# 🏗️ System Architecture

```
                    ┌───────────────────────────────┐
                    │           Client              │
                    │      Web Browser/User         │
                    └───────────────┬───────────────┘
                                    │
                                    ▼
                    ┌───────────────────────────────┐
                    │ React + TypeScript Frontend   │
                    │          (Vercel)             │
                    └───────────────┬───────────────┘
                                    │
                             REST API (HTTPS)
                                    │
                                    ▼
                    ┌───────────────────────────────┐
                    │ Spring Boot Backend           │
                    │ Spring Security + JWT         │
                    │          (Render)             │
                    └───────────────┬───────────────┘
                                    │
                          Spring Data JPA / Hibernate
                                    │
                                    ▼
                    ┌───────────────────────────────┐
                    │      MySQL Database           │
                    │      (Clever Cloud)           │
                    └───────────────────────────────┘
```

# 📁 Project Structure

```
banking-frontend
│
├── public
│
├── src
│   ├── assets
│   ├── components
│   ├── context
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── routes
│   ├── services
│   ├── styles
│   ├── types
│   ├── utils
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/banking-frontend.git
```

Navigate to the project

```bash
cd banking-frontend
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

# 🔗 Backend Repository

This project communicates with the backend REST API.

Backend Repository:

https://github.com/YOUR_USERNAME/banking-backend

---

# 🚀 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | Clever Cloud MySQL |

---

# 📸 Application Screenshots

> Add screenshots here

- Login Page
- Registration Page
- Dashboard
- Transaction History
- Money Transfer
- Admin Dashboard

---

# 🔮 Future Enhancements

- 🌙 Dark Mode
- 🔔 Notifications
- 📄 PDF Bank Statements
- 📈 Advanced Analytics
- 📧 Email Alerts
- 🌍 Multi-language Support

---

# 👨‍💻 Author

**Hemish S**

B.Tech – Electronics & Communication Engineering

---

## ⭐ Support

If you found this project useful, don't forget to ⭐ the repository.
