# 🏦 Enterprise Banking System - Frontend

A modern and responsive banking web application built using **React**, **TypeScript**, **Material UI**, and **Vite**. This application provides a secure and user-friendly interface for customers and administrators to manage banking operations.

---

## 🌐 Live Demo

**Frontend:** https://enterprise-banking-frontend.vercel.app/

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
git clone https://github.com/HemishSantosh/banking-frontend.git
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

https://github.com/HemishSantosh/enterprise-banking-backend.git

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
Login
<img width="1366" height="766" alt="banking-frontend - Google Chrome 22-07-2026 17_46_27" src="https://github.com/user-attachments/assets/7e79a7d5-cf35-454c-8f0a-1dada181b85e" />

Dashboard
<img width="1366" height="766" alt="banking-frontend - Google Chrome 22-07-2026 17_49_49" src="https://github.com/user-attachments/assets/f2a9d3ac-251e-4660-8aea-80719681676d" />

Cards
<img width="1366" height="766" alt="banking-frontend - Google Chrome 22-07-2026 17_49_37" src="https://github.com/user-attachments/assets/be2189da-287c-4bad-b5fd-d7bea8acb3a6" />

Analytics
<img width="1366" height="766" alt="banking-frontend - Google Chrome 22-07-2026 17_49_20" src="https://github.com/user-attachments/assets/39623365-2678-4a55-977b-a98aff6a48ad" />
<img width="1366" height="766" alt="banking-frontend - Google Chrome 22-07-2026 17_49_08" src="https://github.com/user-attachments/assets/9fb9456c-3ec4-493d-8039-4b8399ee2861" />



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
