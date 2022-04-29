const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const route = require("../LoginWebPage/routes/user.routers")(app);
const db = require("../../LavaFiles/LoginWebPage/models/db.setup");
db.sequelize.sync();
var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to lava's World." });
});
app.use(route);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});