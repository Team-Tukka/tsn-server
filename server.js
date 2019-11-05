import express from "express";
import connectDB from "./config/db";

const app = express();

// Connect Database
connectDB();

// Sætter porten som express vil lytte på
app.listen({ port: 3000 }, () => {
  console.log("Server kører på http://localhost:3000");
});
