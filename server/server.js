const express = require("express");
const bodyParser = require("body-parser");
const decorator = require("./database/decorator");

require("dotenv").config();

// data vars
const PORT = process.env.EXPRESS_HOST_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;

if (!PORT) {
  console.log("No Port Found");
}
if (!SESSION_SECRET) {
  console.log("No Session Secret Found");
}
if (!REDIS_HOSTNAME) {
  console.log("No Redis Hostname Found");
}
if (!PORT || !SESSION_SECRET || !REDIS_HOSTNAME) {
  return process.exit(1);
}

// setup server middleware
const app = express();
app.use(bodyParser.json({ extended: true }));

// decorate request with database
app.use(decorator);

// routes
app.get("/api/smoke", (req, res) => {
  res.json({ smoke: "test" });
});

app.post("/api/contact", (req, res) => {
  const { body } = req;

  console.log(body);

  res.json({
    success: 200
  });
});

// start server
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
