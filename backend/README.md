# EventHorizon Management System

A backend REST API for managing user authentication and email verification.

## Packages Used

- Express
- Mongoose
- Joi
- bcryptjs
- jsonwebtoken
- Nodemailer
- Morgan
- dotenv
- crypto

## Installation

### 1. clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Install dependencies 

```bash
npm install
```
### 3. create an `.env` file inside the backend folder and include these:

```bash
PORT=3555
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASSWORD=your_email_app_password
FRONTEND_URL=your_frontend_url
```

### 4. Run the application using

```bash
npm run dev
```
### 5. Deployment or Render start command

```
npm start
```


