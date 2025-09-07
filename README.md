# Livia Backend - API Documentation

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
  - [Doctors](#doctors)
  - [Patients](#patients) _(Pending)_
  - [Appointments](#appointments) _(Pending)_
  - [Business](#business) _(Pending)_
  - [Conversations](#conversations) _(Pending)_
  - [Messages](#messages) _(Pending)_
  - [Notifications](#notifications) _(Pending)_
  - [Notes](#notes) _(Pending)_
  - [Appointment States](#appointment-states) _(Pending)_
- [Status Codes](#status-codes)

---

## 📖 Overview

Livia Backend is a REST API built with NestJS that manages a medical appointment system through a WhatsApp bot powered by Gemini AI. Users can book, check, reschedule, and cancel medical appointments through automated conversations.

### Key Features:

- 🤖 WhatsApp bot integration with Gemini AI for appointment management
- 👨‍⚕️ Doctor and specialty management
- 👥 Patient administration
- 📅 Complete medical appointment system
- 💬 Conversation history tracking
- 🔔 Notification system

---

## 🛠 Tech Stack

- **Framework**: NestJS 11.0.1
- **Database**: PostgreSQL
- **ORM**: Prisma 6.14.0
- **Validation**: class-validator, class-transformer
- **Language**: TypeScript 5.7.3
- **AI Integration**: Gemini AI

---

## ⚙️ Setup

### Environment Variables

```env
DATABASE_URL="postgresql://user:password@localhost:5432/livia_db"
PORT=3000
```

### Installation

```bash
# Install dependencies
npm install

# Run Prisma migrations
npx prisma migrate dev

# Start development server
npm run start:dev
```

### Global Validation

The project uses global validation configured in `main.ts`:

- ✅ Whitelist enabled (removes extra fields)
- ❌ Non-whitelisted fields throw errors
- 🔄 Automatic type transformation
- 📝 class-validator for DTOs

---

## 🔐 Authentication

_To be implemented_

---

## 🚀 API Endpoints

### 👨‍⚕️ Doctors

#### `POST /doctors`

Create a new doctor in the system.

**Request Body:**

```json
{
  "name": "Dr. Juan Pérez",
  "specialty": "Physiotherapy",
  "negocio_id": 1
}
```

**Validations:**

- `name`: Required string, cannot be empty
- `specialty`: Optional string
- `negocio_id`: Optional number

**Response (201):**

```json
{
  "id": 1,
  "name": "Dr. Juan Pérez",
  "specialty": "Physiotherapy",
  "negocio_id": 1,
  "created_at": "2025-01-15T10:30:00.000Z",
  "updated_at": "2025-01-15T10:30:00.000Z",
  "deleted_at": null
}
```

**Possible Errors:**

- `400 Bad Request`: Invalid input data
- `500 Internal Server Error`: Server error

---

### 👥 Patients

_Endpoints to be implemented_

---

### 📅 Appointments

_Endpoints to be implemented_

---

### 🏢 Business

_Endpoints to be implemented_

---

### 💬 Conversations

_Endpoints to be implemented_

---

### 📨 Messages

_Endpoints to be implemented_

---

### 🔔 Notifications

_Endpoints to be implemented_

---

### 📝 Notes

_Endpoints to be implemented_

---

### 📊 Appointment States

_Endpoints to be implemented_

---

## 📋 Status Codes

### HTTP Status Codes:

- `200 OK`: Successful request
- `201 Created`: Resource created successfully
- `400 Bad Request`: Invalid input data
- `401 Unauthorized`: Not authorized
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Internal server error

### Validation States:

- Missing required fields
- Incorrect data types
- Non-whitelisted fields in request

---

## 🚧 Project Status

**Implemented Features:**

- ✅ Create doctors
- ✅ Global validation setup
- ✅ Prisma data models

**Upcoming Features:**

- 🔄 Complete CRUD for doctors
- 🔄 Patient management
- 🔄 Appointment system
- 🔄 WhatsApp bot with Gemini AI
- 🔄 Notification system

---

## 📝 Development Notes

- All models include soft delete (`deleted_at`)
- Validations handled with class-validator
- Automatic type transformation
- PostgreSQL database
- Prisma auto-generates TypeScript types
