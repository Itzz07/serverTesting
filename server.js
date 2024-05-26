const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cron = require("node-cron");

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const path = require("path");

// ...

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/randomCheck", (req, res) => {
  function randomCheck() {
    return Math.floor(Math.random() * 6);
  }
  res.json({ number: randomCheck() });
});

cron.schedule('*/30 * * * * *', () => {
  console.log("Running Cron Job");
  // your cron job code
  // randomCheck();
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
