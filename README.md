# Smart Interview Scheduling System

A full-stack **MERN application** that automates and streamlines the interview scheduling process between HRs, interviewers, and candidates — eliminating manual coordination, email clutter, and scheduling conflicts.

---

## Purpose

Traditional interview scheduling involves:
- Multiple email exchanges  
- Manual tracking (Excel, docs)  
- Scheduling conflicts  
- Poor visibility  

This system provides a **centralized platform** to manage the entire interview workflow efficiently.

---

##  Key Features

-  JWT Authentication  
-  Role-Based Access Control (RBAC)  
-  Multi-role system (Admin, HR, Interviewer, Candidate)  
-  Interview scheduling & management  
-  Interviewer availability tracking  
-  Feedback system with controlled visibility  
-  Conflict prevention (no double booking)  

---

##  User Roles

###  Admin
- Manage users (HR, Interviewers, Candidates)
- Assign roles
- View system data

###  HR
- Schedule interviews  
- Assign candidates & interviewers  
- Manage interview lifecycle  
- Control feedback visibility  

###  Interviewer
- Add availability  
- View assigned interviews  
- Submit feedback  

###  Candidate
- View interviews  
- Check status  
- View results (if released)  

---

##  Tech Stack

**Frontend**
- React.js
- Axios
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Auth**
- JWT (JSON Web Token)

---

##  Database Schema

### User
```js
{
  name,
  email,
  password,
  role // ADMIN, HR, INTERVIEWER, CANDIDATE
}
