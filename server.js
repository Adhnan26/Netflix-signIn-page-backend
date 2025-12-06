const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default login user
const defaultEmail = "adhnan@gmail.com";
const defaultPass = 123;

// Temporary storage for signup users
let users = [];


// SIGNUP ROUTE
app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  // Check existing user
  const exists = users.find(user => user.email === email);

  if (exists) {
    return res.send({ success: false, message: "User already exists" });
  }

  // Store new user
  users.push({ email, password });
  console.log("Stored Users →", users);

  res.send({ success: true });
});

// LOGIN ROUTE
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = Number(req.body.password);

  // Check default admin
  if (email === defaultEmail && password === defaultPass) {
    return res.send({ success: true });
  }

  // Check signed up users
  const exists = users.find(
    user => user.email === email && Number(user.password) === password
  );

  if (exists) {
    return res.send({ success: true });
  }

  res.send({ success: false });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
