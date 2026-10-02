const express = require("express");
const morgan = require("morgan");
const connectDB = require("./src/configs/db");

require("dotenv").config();

const authRoutes = require("./src/routes/auth.routes");
const userRoutes = require("./src/routes/user.routes");

const app = express();

const port = process.env.PORT || 3555;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});