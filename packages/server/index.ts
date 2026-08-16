import express from "express";
import cors from "cors";
import "dotenv/config";
import chatRoutes from "./routes/chat.routes";

const port = process.env.PORT ? Number(process.env.PORT) : 8080;

const app = express();

// Enable CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());

app.use("/api/chat", chatRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`);
});
