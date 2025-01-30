const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");

// Database setup
const db = new sqlite3.Database("./users.db", (err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Create users table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        email TEXT UNIQUE,
        password TEXT
    )`);
});

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  db.run(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password],
    function (err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.json({ id: this.lastID });
    }
  );
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, row) => {
      if (err || !row) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      res.json({ user: row });
    }
  );
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/newpage", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "newpage.html"));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
