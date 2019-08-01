import express from "express";
import hell from "./hell";
const app = express();

hell("hell");

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log("Server is listening on PORT 3000");
});
