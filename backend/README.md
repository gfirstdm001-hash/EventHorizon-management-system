# EventHorizon Management System

A backend REST API for managing user authentication and email verification.

## Clone the repository

Run the following commands in your terminal to clone and enter the project folder:

``` bash
git clone https://github.com/gfirstdm001-hash/EventHorizon-management-system.git
cd EventHorizon-management-system
```

## Install Dependencies

Install the required packages for the project using:

``` bash
npm install
```

## Set up Environment Variables

This application requires specific environment variables to run.

1. You can ceate a file named `.env` and `.gitignore` inside the subfolder using:
``` bash
 cd backend/
touch .env .gitignore
```

2. copy and paste the following keys into the `.env` file and supply your credentials:

``` env
PORT=3555
MONGO_URI=mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3555
EMAIL_HOST=your_email_host
EMAIL_PORT=your_email_port
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password
```
### Your `.gitignore` file should contain:

``` bash
.env
node_modules/
```
 
### 4. Run the application using

```bash
npm run dev
```
Before running this command, ensure you check your `package.json` file and confirm that the `dev` script is configured correctly like this:

``` bash
"scripts": {
  "dev": "nodemon index.js"
}
```
With this, the server should be running locally at 
http://localhost:3555


## RENDER DEPLOYMENT LINK FOR THIS PROJECT

You can access this application on render using the URL link below

```
https://eventhorizon-management-system-1.onrender.com
```

### Render deployment command
```
npm start
```

