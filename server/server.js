const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router/router");
const cors = require('cors');
const colors = require('colors');
const connectDB = require("./config/database");
app.use(cors());

const port = 2001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded())
connectDB()

app.use(router);


app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});