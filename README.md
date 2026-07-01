# 🏥 MediConnect

MediConnect is a modern full-stack doctor appointment booking platform that enables patients to discover doctors, book appointments, manage their profiles, and securely access healthcare services online. It also provides dedicated Admin and Doctor dashboards for efficient appointment and doctor management.

---

## 🚀 Features

### 👤 Patient

- User Registration & Login (JWT Authentication)
- Browse Doctors by Speciality
- Search Available Doctors
- Book Appointments
- View My Appointments
- Cancel Appointments
- Edit Profile
- Upload Profile Picture
- Secure Authentication

### 👨‍⚕️ Doctor

- Doctor Login
- Dashboard Overview
- Manage Appointments
- Mark Appointment as Completed
- Cancel Appointments
- Update Availability

### 🛠️ Admin

- Secure Admin Authentication
- Dashboard Analytics
- Add New Doctors
- Manage Doctor Availability
- View All Doctors
- View All Appointments

---

# 🖥️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Bcrypt
- Multer
- Cloudinary

---

# 📂 Project Structure

```
MediConnect/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── admin/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/MediConnect.git

cd MediConnect
```

---

## Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Admin

```bash
cd admin
npm install
```

### Backend

```bash
cd backend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=4000

MONGODB_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_password

CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret
```

Create a `.env` file inside the `frontend` directory.

```env
VITE_BACKEND_URL=http://localhost:4000
```

Create a `.env` file inside the `admin` directory.

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

# ▶️ Run the Project

### Backend

```bash
cd backend
npm run server
```

### Frontend

```bash
cd frontend
npm run dev
```

### Admin

```bash
cd admin
npm run dev
```

---

# 📸 Screenshots

You can add screenshots here.

```
Home Page

Doctor Listing

Appointment Booking

User Profile

Admin Dashboard

Doctor Dashboard
```

---

# 🔒 Authentication

- JWT Authentication
- Password Hashing using Bcrypt
- Protected Routes
- Role-based Access Control

---

# 🌟 Future Improvements

- Online Payments
- Video Consultation
- Email Notifications
- Appointment Reminders
- Doctor Ratings & Reviews
- Prescription Upload
- Medical History
- Dark Mode
- Multi-language Support

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Sheevan Ul Haq**

- GitHub: https://github.com/SheevanUlHaq
- LinkedIn: https://www.linkedin.com/in/sheevanulhaq/

---

⭐ If you found this project useful, consider giving it a star!
