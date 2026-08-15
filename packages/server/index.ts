import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
