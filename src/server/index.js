const express = require("express");
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const icons = require("./assets/");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "../../dist")));

app.use(morgan("default"), helmet(), express.json(), cors());
app.get("/api/icons", (req, res) => {
  res.status(200).json({ data: icons });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../../dist/index.html"));
});

app.listen(port, () => console.log("Listening on port 8000..."));
