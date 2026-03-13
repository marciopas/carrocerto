import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
