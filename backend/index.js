import express from "express";
import createUserRoutes from "./Routes/CreateUser.js";
import DisplayDataRoutes from "./Routes/DisplayData.js";
import cors from 'cors';
const app = express();
const port = 5000;

import value from "./db.js";
value();
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/api", createUserRoutes);
app.use("/api", DisplayDataRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
