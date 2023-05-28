import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from Dall-e");
});

const startServer = async () => {
  app.listen(8080, () =>
    console.log("Server has started on port https://localhost:8080")
  );
};

startServer();
