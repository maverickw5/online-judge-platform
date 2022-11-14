const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const initRoutes = require("./routes");
initRoutes(app);

let port = 5000;
app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});