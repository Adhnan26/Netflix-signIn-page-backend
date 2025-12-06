const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multiple default users stored in an array
let users = [
  { email: "adhnan@gmail.com", password: "123" },
  { email: "nandhini@gmail.com", password: "123" },
  { email: "unknown@gmail.com", password: "123" }
];

// LOGIN ROUTE
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if user exists in array
  const found = users.find(user => user.email === email && user.password === password);

  if (found) {
    return res.send(true);
  } else {
    return res.send(false);
  }
});

// Just so uptime robot keeps backend awake
app.get("/", (req, res) => {
  res.send("Backend running ✔️");
});

app.listen(3000, () => {
  console.log("Server Started...");
});
