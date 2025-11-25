# ReconLite

A lightweight, production-ready **Bank Reconciliation System** built to automate transaction matching, support real-world finance workflows, and provide a clear audit trail.  
ReconLite consists of a **Spring Boot backend**, a **Next.js + TypeScript frontend**, and a **PostgreSQL database**, fully deployed on **Render** (backend), **Vercel** (frontend), and **Neon** (PostgreSQL).

---

## 🚀 Features

### 🔄 Core Reconciliation Engine
- Auto‑matches transactions based on rules  
- Supports manual review for unmatched transactions  
- Processes large CSV files efficiently  
- Status tracking: *Matched, Unmatched, Pending Review*

### 📦 API-Driven Architecture
- Fully RESTful Spring Boot backend  
- Clean service, entity, controller layering  
- Input validation and error handling  
- Swagger-ready design

### 🖥️ Modern Frontend (Next.js)
- Upload bank/payment CSVs  
- Trigger reconciliation  
- View matched/unmatched entries  
- Clean UI with lightweight workflows

### 🛡️ Secure & Scalable
- CORS configured for Vercel  
- Environment‑based configuration  
- Stateless API deployment  
- Zero‑cold‑start database with Neon

---

## 🧰 Tech Stack

### **Frontend**
- Next.js 14 (App Router)
- TypeScript  
- Axios for API calls  
- TailwindCSS (optional)

### **Backend**
- Java 17  
- Spring Boot 3.x  
- Spring Web  
- Spring Data JPA  
- PostgreSQL  
- Lombok  

### **Database**
- PostgreSQL on **Neon** (free-tier, no sleep mode)

### **Deployment**
- Frontend → **Vercel**  
- Backend → **Render Web Service (Docker runtime)**  
- Database → **Neon PostgreSQL**

---

## 📁 Project Architecture

```
backend/
 ├── Dockerfile
 ├── src/main/java/com/personal/demo
 │     ├── config/
 │     ├── controller/
 │     ├── service/
 │     ├── repository/
 │     ├── model/
 │     └── dto/
frontend/
 ├── app/
 ├── components/
 └── utils/
```

---

## ⚙️ Deployment Guide

### 1️⃣ **Deploy Backend on Render**
1. Push the project to GitHub  
2. Create **New > Web Service**  
3. Choose **Docker** runtime  
4. Fill:
   - **Build Command:**  
     ```
     docker build -t reconlite .
     ```
   - **Start Command:**  
     ```
     docker run -p 8080:8080 reconlite
     ```
5. Add env variables:
   ```
   SPRING_DATASOURCE_URL=jdbc:postgresql://<neon-host>/<db>
   SPRING_DATASOURCE_USERNAME=<username>
   SPRING_DATASOURCE_PASSWORD=<password>
   ```
6. Deploy

---

### 2️⃣ **Deploy Frontend on Vercel**
1. Push Next.js frontend to GitHub  
2. Import project into Vercel  
3. Add environment var:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://reconlite.onrender.com
   ```
4. Deploy

---

### 3️⃣ **Neon PostgreSQL Setup**
1. Create a free serverless PostgreSQL instance  
2. Copy the connection string  
3. Configure in Spring Boot (Render environment)

---

## 🧪 Local Development

### Backend
```
cd backend
./mvnw spring-boot:run
```

### Frontend
```
cd frontend
npm install
npm run dev
```

---

## 🧾 API Endpoints Overview

### Fetch all reconciliations
```
GET /reconciliation
```

### Upload and reconcile transactions
```
POST /reconciliation/create
```

### Delete reconciliation
```
DELETE /reconciliation/{id}
```

---

## 👨‍💻 How to Contribute

1. Fork the repo  
2. Create a new branch  
3. Commit your updates  
4. Make a PR with a clear description  

---

## 🧑‍🏫 Notes for Recruiters

ReconLite demonstrates:
- Real-world backend engineering  
- Database modelling for financial systems  
- Deployment across multiple cloud platforms  
- Handling CORS, environment configs, cold-start issues  
- Clean separation of backend/frontend concerns  

This project is built to show production-level thinking in a compact codebase.

---

## 🌟 Final Notes
If you'd like to extend ReconLite:
- Add authentication (Clerk/Auth0/NextAuth)  
- Add pagination & search  
- Add downloadable reconciliation reports  
- Add rule-based smart matching  
