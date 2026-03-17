# 🦷 Dentist Appointment Booking Platform

A full-stack MERN application that allows users to browse dentists, book appointments, and enables admins to manage appointments efficiently.

---

## 🚀 Live Demo

* 🌐 Frontend (Vercel): https://your-vercel-link.vercel.app
* 🔗 Backend (Render): https://your-render-link.onrender.com

---

## 📌 Features

### 👤 User Features

* View list of dentists
* Search & filter dentists
* Book appointment
* Form validation
* Responsive UI

### 🔐 Authentication

* User Register & Login
* Admin Login
* Role-based access (Admin / User)

### 🛠️ Admin Features

* View all appointments
* Update appointment status (Booked / Completed)
* Add new dentists
* Dashboard view

---

## 🔐 Authentication (Login & Register)

The application includes a complete authentication system for both users and admins.

### 👤 User Registration

* Users can create an account using:

  * Name
  * Email
  * Password
* Passwords are securely stored (hashed)

### 🔑 Login

* Users can log in using email and password
* On successful login:

  * User data is stored in `localStorage`
  * User is redirected to dashboard

### 🛡️ Role-Based Access

* Two roles:

  * `user`
  * `admin`

#### Access Control:

* Users → View dentists & book appointments
* Admin → Access admin dashboard

### 🔄 Session Handling

* Login state stored in `localStorage`
* Logout clears session and redirects to login page

### 🔐 Protected Routes

* `/` → Accessible only after login
* `/admin` → Accessible only for admin users

---

## 🧪 Sample Login

### Admin

Email: [admin@test.com](mailto:admin@test.com)
Password: 123456

### User

Email: [user@test.com](mailto:user@test.com)
Password: 123456

---

## ⚙️ Auth APIs

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user

---

## 🧰 Tech Stack

### Frontend

* React.js (Hooks)
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## 📁 Project Structure

```
dentist-appointment/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── public/
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone https://github.com/Krithikapawar/dentist-appointment.git
cd dentist-appointment
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```
npm start
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

## 🔌 API Endpoints

### Dentist APIs

* `GET /api/dentists` → Fetch all dentists
* `POST /api/dentists` → Add dentist

### Appointment APIs

* `POST /api/appointments` → Create appointment
* `GET /api/appointments` → Get all appointments

### Auth APIs

* `POST /api/auth/register`
* `POST /api/auth/login`

---

## 🎯 Key Highlights

* Clean component-based architecture
* RESTful API design
* Role-based authentication
* Fully responsive UI (Tailwind)
* Image upload support
* Error & loading states handled

---

## ✨ Bonus Features Implemented

* Admin dashboard
* Appointment status update
* Dentist image upload
* Authentication system
* Search & filtering

---

## 📸 Screenshots

(Add screenshots here if needed)

---

## 🧠 Learnings

* Full-stack MERN development
* API integration
* Authentication & authorization
* Deployment (Vercel + Render)
* Debugging real-world issues

---

## 📬 Contact

👩‍💻 Krithika Pawar
🔗 GitHub: https://github.com/Krithikapawar

---

## ⭐ If you like this project, give it a star!
