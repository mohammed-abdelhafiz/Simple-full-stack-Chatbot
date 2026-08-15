import express from "express";
import "dotenv/config";
import chatRoutes from "./routes/chat.routes";

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/api/chat", chatRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
