const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
const port = 3000;
app.listen(port, () => console.log(`Apps running at http://localhost:${port}`));
app.use(bodyParser.json());
let pwo = require("./json/PersonalWsorkOut.json");
let hwo = require("./json/HeroesWorkOut.json");

// app.get('/', (req, res) => res.send('Hello World!'));

app.get("/pwo", (req, res) => {
  res.json(pwo);
});
app.get("/hwo", (req, res) => {
  res.json(hwo);
});
