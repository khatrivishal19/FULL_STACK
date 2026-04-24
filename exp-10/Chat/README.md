# 💬 Chat Application (Spring Boot + React)

A real-time chat application built using **Spring Boot (Backend)** and **React (Frontend)**.
This project demonstrates full-stack development with REST/WebSocket communication.

---

## 🚀 Features

* 🔹 Real-time chat system
* 🔹 Spring Boot backend with REST/WebSocket support
* 🔹 React-based frontend UI
* 🔹 Modular project structure
* 🔹 Easy to run locally

---

---

## ⚙️ Technologies Used

### Backend:

* Java (JDK 21)
* Spring Boot
* Maven

### Frontend:

* React
* Vite / npm

---

## ▶️ How to Run the Project

### 🔹 1. Clone the repository

```bash
git clone (https://github.com/khatrivishal19/FULL_STACK/new/main/exp-10/)
cd exp-10
```

---

### 🔹 2. Run Backend (Spring Boot)

```bash
cd Chat
chmod +x mvnw
./mvnw spring-boot:run
```

👉 Backend runs on:

```
http://localhost:8080
```

---

### 🔹 3. Run Frontend (React)

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

👉 Frontend runs on:

```
http://localhost:5173
```

---

## 🔗 Frontend-Backend Connection

* Frontend communicates with backend APIs/WebSocket
* Ensure backend is running before frontend

---

## 📂 Key Files

* Main Backend Entry:

  * `ChatApplication.java` → 

* React Entry:

  * `main.jsx` → 

* App Component:

  * `App.jsx` → 

---

## ⚠️ Requirements

* Java 21 (Important for Spring Boot 4)
* Node.js (v16+ recommended)
* Maven (optional, wrapper included)

---

## 🐛 Common Issues

### ❌ JAVA_HOME not set

Fix:

```bash
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
```

---

### ❌ Permission denied (mvnw)

Fix:

```bash
chmod +x mvnw
```

---

### ❌ Port already in use

Kill process or change port in:

```
application.properties
```

---

## 📌 Future Improvements

* Authentication (JWT)
* Database integration
* UI enhancements
* Deployment (Docker / Cloud)

---

## 📸 Screenshots

### 🏠 Frontend Running
![Home](/home.png)

### 💬 Chat Interface
![Chat](/chat.png)

### ⚙️ Backend Running
![Backend](/backend.png)

## 👨‍💻 Author

**Vishal Khatri**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
