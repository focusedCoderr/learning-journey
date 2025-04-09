import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Cohort");
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
